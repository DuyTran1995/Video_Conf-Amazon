import { APIGatewayProxyHandler } from 'aws-lambda';
import { response, ensureLogStream, logGroupName } from '../utils';
import { CloudWatchLogsUtil } from '../utils/cloud-watch-util';

export const handler: APIGatewayProxyHandler = async (event, context, callback) => {
  const body = JSON.parse(event.body);
  if (!body.logs || !body.meetingId || !body.attendeeId || !body.appName) {
    return response(
      400,
      'application/json',
      JSON.stringify({ error: 'Need properties: logs, meetingId, attendeeId, appName' }),
    );
  } else if (!body.logs.length) {
    return response(200, 'application/json', JSON.stringify({}));
  }

  const logStreamName = `ChimeSDKMeeting_${body.meetingId.toString()}`;
  const putLogEventsInput: any = {
    logGroupName,
    logStreamName,
  };
  const uploadSequence = await ensureLogStream(CloudWatchLogsUtil.getClient(), logStreamName);
  if (uploadSequence) {
    putLogEventsInput.sequenceToken = uploadSequence;
  }

  const logEvents = [];
  for (let i = 0; i < body.logs.length; i++) {
    const log = body.logs[i];
    const timestamp = new Date(log.timestampMs).toISOString();
    const message = `${timestamp} [${log.sequenceNumber}] [${
      log.logLevel
    }] [meeting: ${body.meetingId.toString()}] [attendee: ${body.attendeeId}]: ${log.message}`;
    logEvents.push({
      message: message,
      timestamp: log.timestampMs,
    });
  }

  putLogEventsInput.logEvents = logEvents;
  await CloudWatchLogsUtil.putLogEvents(putLogEventsInput);

  return response(200, 'application/json', JSON.stringify({}));
};
