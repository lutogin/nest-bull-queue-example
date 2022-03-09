import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { QueueActions, Queues } from '../bull-queue/queue.models';

@Injectable()
export class ProducersService {
  constructor(@InjectQueue(Queues.Message) private readonly queue: Queue) {}

  async handler(data: Record<string, any>) {
    const job = await this.queue.add(QueueActions.Send, data);

    return {
      jobId: job.id,
    };
  }
}
