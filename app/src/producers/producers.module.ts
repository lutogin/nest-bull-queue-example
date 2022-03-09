import { Module } from '@nestjs/common';
import { ProducersController } from './producers.controller';
import { BullModule } from '@nestjs/bull';
import { ProducersService } from './producers.service';
import { ConsumersModule } from '../consumers/consumers.module';
import { Queues } from '../bull-queue/queue.models';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: Queues.Message,
    }),
    ConsumersModule,
  ],
  providers: [ProducersService],
  controllers: [ProducersController],
})
export class ProducersModule {}
