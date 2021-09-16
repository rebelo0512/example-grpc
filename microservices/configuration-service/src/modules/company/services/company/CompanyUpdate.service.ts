import { Inject, Injectable } from '@nestjs/common';
import { CompanyModel } from '../../externals-pkg/typeorm/models/CompanyModel.entity';
import { ICompanyUpdateDTO } from '../../interfaces/dtos/ICompany.dto';
import { ICompanyRepository } from '../../interfaces/repositories/ICompanyRepository';

@Injectable()
export class CompanyUpdateService {
  constructor(
    @Inject('CompanyRepository') private compRepo: ICompanyRepository,
  ) {}

  async handle(fields: ICompanyUpdateDTO): Promise<CompanyModel> {
    return this.compRepo.update(fields);
  }
}
