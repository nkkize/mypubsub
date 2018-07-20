const PubSub = require('@google-cloud/pubsub');
const PUBSUB_EMULATOR_HOST = "http://localhost:8085";
const PUBSUB_PROJECT_ID = "minions-f5125";

// Instantiates a client
const pubsubClient = new PubSub({
  projectId: PUBSUB_PROJECT_ID,
  apiEndpoint: PUBSUB_EMULATOR_HOST
});

const topicName = 'messaging-datapublish-transmission';
const subscriptionName = 'messaging-datapublish-transmission';

// Creates the new topic
pubsubClient
  .createTopic(topicName)
  .then(results => {
    const topic = results[0];
    console.log(`Topic ${topic.name} created.`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

// Creates subscription for the topc
pubsubClient
    .topic(topicName)
    .createSubscription(subscriptionName)
    .then(results => {
        const subscription = results[0];
        console.log(`Subscription ${subscription.name} created.`);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });