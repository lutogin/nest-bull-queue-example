import { Body, Controller, Post } from '@nestjs/common';
import { ProducersService } from './producers.service';

@Controller('message')
export class ProducersController {
  constructor(private readonly producerService: ProducersService) {}

  @Post('send')
  async processSending(@Body() data: Record<string, any>) {
    return this.producerService.handler(data);
  }
}
