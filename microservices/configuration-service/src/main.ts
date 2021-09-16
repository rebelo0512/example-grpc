import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './shared/modules/app/app.module';

const logger = new Logger();

async function bootstrap() {
  const urlPortGrpc = `0.0.0.0:${process.env.CONFIGURATION_SERVICE_PORT}`;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'configuration',
        protoPath: join(
          __dirname,
          './../src/shared/_proto/configuration/configuration.proto',
        ),
        url: urlPortGrpc,
        loader: {
          enums: String,
          objects: true,
          arrays: true,
          keepCase: true,
        },
      },
    },
  );

  await app.listen();

  logger.log(`Module Configuration Init - ${urlPortGrpc}`);
}

bootstrap();
