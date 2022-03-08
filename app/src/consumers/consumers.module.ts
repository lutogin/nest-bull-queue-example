import { Module } from '@nestjs/common';
import { SendMessageProcessor } from './send-message.processor';

@Module({
  providers: [SendMessageProcessor],
})
export class ConsumersModule {}
