import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { QueueActions, Queues } from '../config';

@Injectable()
export class ProducersService {
  constructor(
    @InjectQueue(Queues.Message) private readonly imageQueue: Queue,
  ) {}

  async handler(data: Record<string, any>) {
    const job = await this.imageQueue.add(QueueActions.Send, data);

    return {
      jobId: job.id,
    };
  }
}
