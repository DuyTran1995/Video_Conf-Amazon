/* eslint-disable @typescript-eslint/no-var-requires */
const { Component } = require('@serverless/core');
const { getAppsConfig } = require('../../config/env-config.js');

const appName = 'tutelageApp';

class Website extends Component {
  async default(inputs) {
    if (!inputs || !inputs.stage) {
      throw new Error('Please specific which environment to deploy i.e. sls deploy --stage dev.');
    }

    const template = await this.load('@serverless/template', inputs.stage);
    const { tutelageApp } = getAppsConfig(inputs.stage);

    const output = await template({
      template: {
        name: appName,
        stage: inputs.stage,
        [appName]: {
          component: '@serverless/website@4.0.0',
          inputs: {
            code: {
              src: 'dist/apps/tutelage-app',
              root: '../../',
            },
            env: {},
            region: tutelageApp.region,
            bucketName: tutelageApp.bucketName,
            domain: tutelageApp.domainName,
          },
        },
      },
    });

    return output;
  }

  async remove(inputs) {
    const website = await this.load('@serverless/template', inputs.stage);

    await website.remove();

    return {};
  }
}

module.exports = Website;
