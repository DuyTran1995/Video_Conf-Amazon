import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'API is up and running',
      logStreamName: context.logStreamName,
      meta: {
        environment: process.env.STAGE,
        platform: process.platform,
        runtime: process.title,
        runtimeVersion: process.version,
      },
    }),
  };
};
