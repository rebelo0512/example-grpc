import { Controller, Logger, OnModuleInit, UseGuards } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { JoiValidationGuard } from 'src/shared/external-pkg/joi/JoiValidation.guard';
import {
  companyCreateSchema,
  companyUpdateSchema,
} from '../../externals-pkg/joi/schemas/companySchema';
import { CompanyModel } from '../../externals-pkg/typeorm/models/CompanyModel.entity';
import { CompanyValidationExistGuard } from '../../guards/CompanyValidationExist.guard';
import {
  ICompanyCreateDTO,
  ICompanyGetAllReturnDTO,
  ICompanyUpdateDTO,
} from '../../interfaces/dtos/ICompany.dto';
import { CompanyCreateService } from '../../services/company/CompanyCreate.service';
import { CompanyFindByIdService } from '../../services/company/CompanyFindById.service';
import { CompanyGetAllService } from '../../services/company/CompanyGetAll.service';
import { CompanyUpdateService } from '../../services/company/CompanyUpdate.service';

@Controller()
export class CompanyController implements OnModuleInit {
  private logger = new Logger(CompanyController.name);

  constructor(
    private companyGetAllService: CompanyGetAllService,
    private companyFindByIdService: CompanyFindByIdService,
    private companyCreateService: CompanyCreateService,
    private companyUpdateService: CompanyUpdateService,
  ) {}

  onModuleInit(): void {
    this.logger.log('Methods - getAll | findById | create | update');
  }

  @GrpcMethod('CompanyService', 'getAll')
  getAll(): Promise<ICompanyGetAllReturnDTO> {
    return this.companyGetAllService.handle();
  }

  @GrpcMethod('CompanyService', 'findById')
  @UseGuards(CompanyValidationExistGuard)
  findById({ id }: { id: number }): Promise<CompanyModel> {
    return this.companyFindByIdService.handle(Number(id));
  }

  @GrpcMethod('CompanyService', 'create')
  @UseGuards(new JoiValidationGuard(companyCreateSchema))
  create(fields: ICompanyCreateDTO): Promise<CompanyModel> {
    return this.companyCreateService.handle(fields);
  }

  @GrpcMethod('CompanyService', 'update')
  @UseGuards(CompanyValidationExistGuard)
  @UseGuards(new JoiValidationGuard(companyUpdateSchema))
  update(fields: ICompanyUpdateDTO): Promise<CompanyModel> {
    return this.companyUpdateService.handle(fields);
  }
}
