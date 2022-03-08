import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BullQueueModule } from './bull-queue/bull-queue.module';
import { ProducersModule } from './producers/producers.module';
import { ConsumersModule } from './consumers/consumers.module';
import configs from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configs],
    }),
    BullQueueModule,
    ProducersModule,
    ConsumersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
