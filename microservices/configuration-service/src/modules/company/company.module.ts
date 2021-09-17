import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyController } from './controllers/company/company.controller';
import { CompanyModel } from './external-pkgs/typeorm/models/CompanyModel.entity';
import { CompanyMysqlRepository } from './external-pkgs/typeorm/repository/CompanyMysqlRepository';
import { CompanyCreateService } from './services/company/CompanyCreate.service';
import { CompanyFindByIdService } from './services/company/CompanyFindById.service';
import { CompanyGetAllService } from './services/company/CompanyGetAll.service';
import { CompanyUpdateService } from './services/company/CompanyUpdate.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyModel])],
  controllers: [CompanyController],
  exports: [],
  providers: [
    // Repositories
    {
      provide: 'CompanyRepository',
      useClass: CompanyMysqlRepository,
    },
    // Services
    CompanyGetAllService,
    CompanyFindByIdService,
    CompanyCreateService,
    CompanyUpdateService,
  ],
})
export class CompanyModule {}
