import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { CompanyModule } from './company/company.module';

const pathDefault = '/configuration/api';

@Module({
  imports: [
    CompanyModule,
    RouterModule.register([
      {
        path: `${pathDefault}/company`,
        module: CompanyModule,
      },
    ]),
  ],
})
export class ConfigurationModule {}
