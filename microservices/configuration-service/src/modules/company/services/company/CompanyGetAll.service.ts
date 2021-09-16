import { Inject, Injectable } from '@nestjs/common';
import { ICompanyGetAllReturnDTO } from '../../interfaces/dtos/ICompany.dto';
import { ICompanyRepository } from '../../interfaces/repositories/ICompanyRepository';

@Injectable()
export class CompanyGetAllService {
  constructor(
    @Inject('CompanyRepository') private compRepo: ICompanyRepository,
  ) {}

  async handle(): Promise<ICompanyGetAllReturnDTO> {
    return { companies: await this.compRepo.getAll({}) };
  }
}
