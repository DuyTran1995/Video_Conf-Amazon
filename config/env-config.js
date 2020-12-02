const DEFAULT_STAGE = 'dev';
const DEFAULT_REGION = 'ap-southeast-1';
const DEFAULT_PROFILE = 'tutelage';
const STANDARD_ENV = ['dev', 'sit', 'uat', 'staging', 'prod'];
const MEMORY_MAP = {
  dev: 1024,
  sit: 2048,
  uat: 2048,
  staging: 2048,
  prod: 2048,
};

const getAccountId = async () => {
  const { STS } = require('aws-sdk');
  return await (await new STS().getCallerIdentity().promise()).Account;
};

const roleArn = (accountId, roleName) => `arn:aws:iam::${accountId}:role/${roleName}`;
const isStandardStage = stage => STANDARD_ENV.includes(stage);
const isDevEnv = stage => stage === 'dev';
const isProdEnv = stage => stage === 'prod';

// Build url suffix based on a stage, for prod stage we use blank
// For example
// - dev: app-api-dev.domain.com
// - prod: app-api.domain.com
const stageSuffix = stage => (!isProdEnv(stage) && '-' + stage) || '';

/**
 * The function to retrieve/build the configurations
 * for deploying static sites using Serverless Component
 */
module.exports.getAppsConfig = stage => {
  const isUatOrProd = ['uat', 'prod'].indexOf(stage) !== -1;

  return {
    tutelageApp: {
      region: DEFAULT_REGION,
      bucketName: isUatOrProd
        ? `app${stageSuffix(stage)}-tutelage-com`
        : `tutelage-app${stageSuffix(stage)}-tutelage-innomizetech-com`,
      domainName: isUatOrProd
        ? `app${stageSuffix(stage)}.tutelage.com`
        : `tutelage-app${stageSuffix(stage)}.tutelage.innomizetech.com`,
    },
  };
};

/**
 * Build the configuration object that can be used for different stage.
 * It helps us deploy serverless service to any stage including:
 * - Standard environments i.e dev, sit, uat, staging, prod
 * - Featured environment i.e reporting, dashboard
 */
module.exports.serverless = async serverless => {
  const { service } = serverless;

  serverless.cli.consoleLog(
    `[Configuration] Building environment configuration for ${service.service}`,
  );

  const options = serverless.processedInput.options;
  const { stage = DEFAULT_STAGE, region = DEFAULT_REGION } = options;
  const profile = options['aws-profile'] || DEFAULT_PROFILE;

  const capitalizedState = stage.toString().toUpperCase();

  process.env.AWS_PROFILE = profile;

  serverless.cli.consoleLog('[Configuration] Identifying the AWS Account ID');
  const accountId = await getAccountId();

  // Fallback to dev stage for non-standard environment i.e. features
  // This can help us deploy a featured environment using dev role
  // Such as sls deploy --stage feature-as
  const roleStage = isStandardStage(stage) ? stage : 'dev';
  const isUatOrProd = ['uat', 'prod'].indexOf(stage) !== -1;

  serverless.cli.consoleLog('[Configuration] Loading serverless configurations');
  serverless.cli.consoleLog(`[Configuration] Current Account ID: ${accountId}`);
  serverless.cli.consoleLog(`[Configuration] Current Profile: ${profile}`);
  serverless.cli.consoleLog(`[Configuration] Current Stage: ${stage}`);

  if (!isStandardStage(stage)) {
    serverless.cli.consoleLog(
      `[Configuration] It seems you are running Serverless command for non-standard environments. Be sure you know what you are doing`,
    );
  }

  // Try to get the shared cfnRole to ensure it is created before running any sls commands
  // to make sure roles are pre-defined for deploying Serverless services
  // await getRole(`tutelage-shared-service-${roleStage}-cfnRole`);

  const loggerConfig = {
    level: isDevEnv ? 'DEBUG' : 'INFO',
    logRetentionInDays: isDevEnv ? 1 : 7,
  };

  const cfnRoles = {
    sharedCfnRole: roleArn(accountId, `tutelage-shared-service-${roleStage}-cfnRole`),
    rootAPIGServiceCfnRole: roleArn(accountId, `tutelage-service-${roleStage}-cfnRole`),
    chimeServiceCfnRole: roleArn(accountId, `tutelage-service-${roleStage}-cfnRole`),
  };
  const monitoringConfig = {
    dashboards: true,
    email: 'hoang@innomizetech.com',
  };
  const tracingConfig = {
    apiGateway: true,
    lambda: true,
  };
  const restApiConfig = {
    logLevel: 'ERROR',
    accessLogging: false,
    format: 'requestId: $context.requestId',
    executionLogging: true,
    fullExecutionData: true,
    customDomain: {
      domainName: isUatOrProd
        ? `api${stageSuffix(stage)}.tutelage.com`
        : `tutelage-api${stageSuffix(stage)}.innomizetech.com`,
      certificateName: isUatOrProd ? '*.tutelage.com' : '*.innomizetech.com',
    },
  };
  const cognitoConfig = {
    tutelageUserPool: {
      name: `TutelageAdmin${capitalizedState}`,
      identityPoolName: `TutelageAdminIdentifyPool${capitalizedState}`,
      passwordMinLength: 8,
      refreshTokenValidity: 30,
      cognitoAuthorizerName: `TutelageAdminCognitoAuthorizer${capitalizedState}`,
      groups: {
        tutelageAdministrator: 'TutelageAdministrator',
      },
    },
  };

  return {
    capitalizedState,
    region,
    profile,
    versionFunctions: false,
    memorySize: MEMORY_MAP[stage] || 512,
    logger: loggerConfig,
    cloudFormation: cfnRoles,
    monitoring: monitoringConfig,
    tracing: tracingConfig,
    restApi: restApiConfig,
    cognito: cognitoConfig,
  };
};
