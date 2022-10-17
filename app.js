require('dotenv').config();
const winston = require('winston');
const { WebClient } = require('@slack/web-api');

const logger = winston.createLogger({
    format: winston.format.prettyPrint(),
    transports: [ new winston.transports.Console() ]
});

const web = new WebClient(process.env.SLACK_TOKEN);

(async () => {
        try {
            await web.chat.postMessage({
                channel: '#general',
                text: `The current time is ${currentTime}`,
            })
            logger.info('Message posted.');
        } catch (e) {
            logger.error(e);
        }
})()

logger.info('Starting the Slack Node SDK');