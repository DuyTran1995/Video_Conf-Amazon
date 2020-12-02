import { APIGatewayProxyHandler } from 'aws-lambda';
import { v4 as uuidv4 } from 'uuid';

import {
  ChimeUtil,
  getMeeting,
  putMeeting,
  response,
  sqsQueueArn,
  useSqsInsteadOfEventBridge,
} from '../utils';

export const handler: APIGatewayProxyHandler = async (event, context, callback) => {
  const query = event.queryStringParameters;
  if (!query.title || !query.name || !query.region) {
    return response(
      400,
      'application/json',
      JSON.stringify({ error: 'Need parameters: title, name, region' }),
    );
  }

  // Look up the meeting by its title. If it does not exist, create the meeting.
  try {
    let meeting = await getMeeting(query.title);
    if (!meeting) {
      const request = {
        // Use a UUID for the client request token to ensure that any request retries
        // do not create multiple meetings.
        ClientRequestToken: uuidv4(),

        // Specify the media region (where the meeting is hosted).
        // In this case, we use the region selected by the user.
        MediaRegion: query.region,

        // Set up SQS notifications if being used
        NotificationsConfiguration: useSqsInsteadOfEventBridge ? { SqsQueueArn: sqsQueueArn } : {},

        // Any meeting ID you wish to associate with the meeting.
        // For simplicity here, we use the meeting title.
        ExternalMeetingId: query.title.substring(0, 64),
      };
      console.log('Creating new meeting: ' + JSON.stringify(request));
      meeting = await ChimeUtil.createMeeting(request);

      // Store the meeting in the table using the meeting title as the key.
      await putMeeting(query.title, meeting);
    }

    // Create new attendee for the meeting
    console.log('Adding new attendee');
    const attendee = await ChimeUtil.createAttendee({
      // The meeting ID of the created meeting to add the attendee to
      MeetingId: meeting.Meeting.MeetingId,

      // Any user ID you wish to associate with the attendeee.
      // For simplicity here, we use a random UUID for uniqueness
      // combined with the name the user provided, which can later
      // be used to help build the roster.
      ExternalUserId: `${uuidv4().substring(0, 8)}#${query.name}`.substring(0, 64),
    });

    // Return the meeting and attendee responses. The client will use these
    // to join the meeting.
    return response(
      200,
      'application/json',
      JSON.stringify(
        {
          JoinInfo: {
            Meeting: meeting,
            Attendee: attendee,
          },
        },
        null,
        2,
      ),
    );
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
