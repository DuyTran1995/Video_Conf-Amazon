import './aws-config';

/**
 * Explicit import client in order to reduce size and increase cold start
 * https://theburningmonk.com/2019/03/just-how-expensive-is-the-full-aws-sdk/
 */
import * as DynamoDB from 'aws-sdk/clients/dynamodb';

const dynamodbClient = new DynamoDB();

export class DynamoDBUtil {
  static getItem(params: DynamoDB.Types.GetItemInput) {
    return dynamodbClient.getItem(params).promise();
  }

  static putItem(params: DynamoDB.Types.PutItemInput) {
    return dynamodbClient.putItem(params).promise();
  }
}
