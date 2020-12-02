import './aws-config';

import { DynamoDBUtil } from './dynamo-util';
import { meetingsTableName, logGroupName } from './meeting-info';

export async function getMeeting(title) {
  const result = await DynamoDBUtil.getItem({
    TableName: meetingsTableName,
    Key: {
      Title: {
        S: title,
      },
    },
  });

  return result.Item ? JSON.parse(result.Item.Data.S) : null;
}

// Stores the meeting in the table using the meeting title as the key
export async function putMeeting(title, meeting) {
  await DynamoDBUtil.putItem({
    TableName: meetingsTableName,
    Item: {
      Title: { S: title },
      Data: { S: JSON.stringify(meeting) },
      TTL: {
        N: `${Math.floor(Date.now() / 1000) + 60 * 60 * 24}`, // clean up meeting record one day from now
      },
    },
  });
}

// Creates log stream if necessary and returns the current sequence token
export async function ensureLogStream(cloudWatchClient, logStreamName) {
  const logStreamsResult = await cloudWatchClient
    .describeLogStreams({
      logGroupName,
      logStreamNamePrefix: logStreamName,
    })
    .promise();

  const foundStream = logStreamsResult.logStreams.find(s => s.logStreamName === logStreamName);
  if (foundStream) {
    return foundStream.uploadSequenceToken;
  }

  await cloudWatchClient
    .createLogStream({
      logStreamName,
      logGroupName,
    })
    .promise();

  return null;
}
