const PubSub = require('@google-cloud/pubsub');
const PUBSUB_EMULATOR_HOST = "http://localhost:8085";
const PUBSUB_PROJECT_ID = "PUBSUB_PROJECT_ID";
const topicName = 'my_topic';

// Instantiates a client
const pubsubClient = new PubSub({
    projectId: PUBSUB_PROJECT_ID,
    apiEndpoint: PUBSUB_EMULATOR_HOST
});

const message = {
    data:  {
        
    }
};

const data = JSON.stringify(message.data);
const dataBuffer = Buffer.from(data);

pubsubClient
    .topic(topicName)
    .publisher()
    .publish(dataBuffer)
    .then(messageId => {
      console.log(`Message ${messageId} published.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
