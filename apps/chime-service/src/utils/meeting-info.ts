// Read resource names from the environment
export const service = 'tutelage-chime-service';
// export const meetingsTableName = `${service}-${process.env.STAGE}`;
export const meetingsTableName = 'tutelage-meeting-Meetings-1PE2NA3TN54JH';
export const logGroupName = 'tutelage-meeting-ChimeBrowserLogs-DAGY84EHZW01';
export const sqsQueueArn =
  'arn:aws:sqs:ap-southeast-1:652737721397:tutelage-meeting-MeetingNotificationsQueue-N16SNJIPNIP5';
export const useSqsInsteadOfEventBridge = true;
