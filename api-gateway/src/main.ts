import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './shared/modules/app/app.module';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const port = configService.get<number>('API_GATEWAY_PORT');

  await app.listen(port);

  logger.log(`Server running in port: ${port}`, 'CoreApp');
}

bootstrap();
