import './aws-config';

// TODO: should reduce import
import * as AWS from 'aws-sdk';

// Create an AWS SDK Chime object. Region 'us-east-1' is currently required.
// Use the MediaRegion property below in CreateMeeting to select the region
// the meeting is hosted in.
const chimeClient = new AWS.Chime({ region: 'us-east-1' });

// Set the AWS SDK Chime endpoint. The global endpoint is https://service.chime.aws.amazon.com.
chimeClient.endpoint = new AWS.Endpoint('https://service.chime.aws.amazon.com');

export class ChimeUtil {
  static createMeeting(params: AWS.Chime.Types.CreateMeetingRequest) {
    return chimeClient.createMeeting(params).promise();
  }

  static createAttendee(params: AWS.Chime.Types.CreateAttendeeRequest) {
    return chimeClient.createAttendee(params).promise();
  }

  static deleteMeeting(params: AWS.Chime.Types.DeleteMeetingRequest) {
    return chimeClient.deleteMeeting(params).promise();
  }
}
