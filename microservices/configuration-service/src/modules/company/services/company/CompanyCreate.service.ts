import { Inject, Injectable } from '@nestjs/common';
import { CompanyModel } from '../../external-pkgs/typeorm/models/CompanyModel.entity';
import { ICompanyCreateDTO } from '../../interfaces/dtos/ICompany.dto';
import { ICompanyRepository } from '../../interfaces/repositories/ICompanyRepository';

@Injectable()
export class CompanyCreateService {
  constructor(
    @Inject('CompanyRepository') private compRepo: ICompanyRepository,
  ) {}

  async handle(fields: ICompanyCreateDTO): Promise<CompanyModel> {
    return this.compRepo.create(fields);
  }
}
