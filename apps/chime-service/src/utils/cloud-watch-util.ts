import './aws-config';

/**
 * Explicit import client in order to reduce size and increase cold start
 * https://theburningmonk.com/2019/03/just-how-expensive-is-the-full-aws-sdk/
 */
import * as CloudWatchLogs from 'aws-sdk/clients/cloudwatchlogs';

const cloudWatchLogsClient = new CloudWatchLogs();

export class CloudWatchLogsUtil {
  static getClient() {
    return cloudWatchLogsClient;
  }

  static putLogEvents(params) {
    return cloudWatchLogsClient.putLogEvents(params).promise();
  }
}
