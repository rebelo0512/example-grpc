import { Global, Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from 'src/modules/company/company.module';
import { DatabaseModule } from '../database/database.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env'],
      isGlobal: true,
    }),
    Logger,
    DatabaseModule,
    CompanyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
