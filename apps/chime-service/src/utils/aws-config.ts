/**
 * By default, the default Node.js HTTP/HTTPS agent creates
 * a new TCP connection for every new request.
 * To avoid the cost of establishing a new connection, you can reuse an existing connection.
 */
process.env.AWS_NODEJS_CONNECTION_REUSE_ENABLED = '1';

import { config } from 'aws-sdk';

config.update({
  region: 'ap-southeast-1',
});

config.apiVersions = {
  ses: '2010-12-01',
  sqs: '2012-11-05',
  s3: '2006-03-01',
  ssm: '2014-11-06',
  dynamodb: '2012-08-10',
  sns: '2010-03-31',
  chime: '2018-05-01',
  cloudwatchlogs: '2014-03-28',
};
