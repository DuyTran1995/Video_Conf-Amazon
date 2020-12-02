import { APIGatewayProxyHandler } from 'aws-lambda';
import { getMeeting, ChimeUtil, response } from '../utils';

export const handler: APIGatewayProxyHandler = async (event, context, callback) => {
  // Fetch the meeting by title
  const meeting = await getMeeting(event.queryStringParameters.title);

  // End the meeting. All attendee connections will hang up.
  await ChimeUtil.deleteMeeting({ MeetingId: meeting.Meeting.MeetingId });

  return response(200, 'application/json', JSON.stringify({}));
};
