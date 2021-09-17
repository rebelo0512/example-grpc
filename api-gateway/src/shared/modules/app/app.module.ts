import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigurationModule } from 'src/modules/configuration/configuration.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env'],
      isGlobal: true,
    }),
    ConfigurationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
