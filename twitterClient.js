const { TwitterApi } = require('twitter-api-v2');

const tClient = new TwitterApi({
  appKey: 'bMSFJD9fIPo2Dd2h3e0J0LRae',
  appSecret: 'FwR3EvN9WInx1z8lWFbLJAfrd4y6Lo0EoMoQoHLeJxnDf5xWlJ',
  accessToken: '1529138870847164416-itbo2KX2cYdsE8plW5kPZdqnUSjJVD',
  accessSecret: 'CgFqfIqQTz8cysZyDGOFVfOm1Y3ed4K2InbHQLtCPDZTW',
});

const client = tClient.v2;

module.exports = client;