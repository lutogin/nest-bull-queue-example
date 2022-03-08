import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { QueueActions, Queues } from '../config';

@Processor(Queues.Message)
export class SendMessageProcessor {
  @Process(QueueActions.Send)
  async handle(job: Job) {
    let progress = 0;
    console.log({
      data: job.data,
    });
    for (let i = 0; i < 10; i++) {
      progress += 10;

      await job.progress(progress);
    }
    return {};
  }
}
