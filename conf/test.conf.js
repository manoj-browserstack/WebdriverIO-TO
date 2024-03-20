const { config: baseConfig } = require('./base.conf.js');

const parallelConfig = {
  // maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      buildName: process.env.BROWSERSTACK_BUILD_NAME,
      source: 'webdriverio:sample-master:v1.2'
    }
  },
  services: [
    [
      'browserstack',
      { buildIdentifier: '#${BUILD_NUMBER}',
      testObservability: true,
      testObservabilityOptions: {
        'projectName': 'Sample WDIO project TO',
        'buildName': 'Sample WDIO build',
        // 'buildTag': 'Any build tag goes here. For e.g. commit message'
    },},
    ],
  ],
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'latest',
      'bstack:options': {
        os: 'Windows',
        osVersion: '10',
      },
    },
  ],
};

exports.config = { ...baseConfig, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i]};
});
