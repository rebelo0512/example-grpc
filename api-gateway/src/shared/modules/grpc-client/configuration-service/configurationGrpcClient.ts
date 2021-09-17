import { ClientProviderOptions } from '@nestjs/microservices';
import { join } from 'path';

export const configurationGrpcClient: ClientProviderOptions = {
  name: 'CONFIGURATION_PKG',
  transport: 4,
  options: {
    package: 'configuration',
    protoPath: join(
      __dirname,
      '../../../../../src/shared/_proto/configuration/configuration.proto',
    ),
    url: 'localhost:40100',
    loader: {
      enums: String,
      objects: true,
      arrays: true,
      keepCase: true,
    },
  },
};
