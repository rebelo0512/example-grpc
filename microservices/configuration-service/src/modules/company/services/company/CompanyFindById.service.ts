import { Inject, Injectable } from '@nestjs/common';
import { CompanyModel } from '../../externals-pkg/typeorm/models/CompanyModel.entity';
import { ICompanyRepository } from '../../interfaces/repositories/ICompanyRepository';

@Injectable()
export class CompanyFindByIdService {
  constructor(
    @Inject('CompanyRepository') private compRepo: ICompanyRepository,
  ) {}

  async handle(id: number): Promise<CompanyModel> {
    return this.compRepo.findById({ id });
  }
}
