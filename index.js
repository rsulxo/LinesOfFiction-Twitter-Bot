const client = require('./twitterClient');
var CronJob = require('cron').CronJob;
const quotes = require('./quotes.json');

const randomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

const job = new CronJob(
    '0 */12 * * *',
    () => {
        const createdTweet = client.tweet(randomQuote());
    },
    null,
    true,
    'Europe/London'
);

job.start();