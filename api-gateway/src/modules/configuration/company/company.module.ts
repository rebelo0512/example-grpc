import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { configurationGrpcClient } from 'src/shared/modules/grpc-client/configuration-service/configurationGrpcClient';
import { CompanyRoute } from './routes/company.route';

@Module({
  imports: [ClientsModule.register([configurationGrpcClient])],
  controllers: [CompanyRoute],
  exports: [],
})
export class CompanyModule {}
