const { TWILIO_SEND_MESSAGE_QUEUE, REDIS_HOST, REDIS_PORT } = process.env;

export default () => ({
  TWILIO_SEND_MESSAGE_QUEUE,
  REDIS_HOST,
  REDIS_PORT,
});

export enum Queues {
  Message = 'message',
}

export enum QueueActions {
  Send = 'send',
}
