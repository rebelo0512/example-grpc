import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICompanyRepository } from 'src/modules/company/interfaces/repositories/ICompanyRepository';
import {
  ICompanyRepositoryFindById,
  ICompanyRepositoryCreate,
  ICompanyRepositoryUpdate,
} from 'src/modules/company/interfaces/repositories/repo-interfaces/ICompanyRepositoryInterfaces';
import { IRepositoryDefaultFields } from 'src/shared/external-pkg/typeorm/interfaces/IRepositoryDefaultFields';
import { Repository } from 'typeorm';
import { CompanyModel } from '../models/CompanyModel.entity';

@Injectable()
export class CompanyMysqlRepository implements ICompanyRepository {
  constructor(
    @InjectRepository(CompanyModel) private compRepo: Repository<CompanyModel>,
  ) {}

  getAll({
    selectFields = '*',
    fieldOrder = 'comp_name',
    orderBy = 'ASC',
  }: IRepositoryDefaultFields<CompanyModel>): Promise<CompanyModel[]> {
    return this.compRepo
      .createQueryBuilder('comp')
      .select(selectFields)
      .orderBy(fieldOrder, orderBy)
      .getRawMany();
  }

  findById({
    id,
    selectFields = '*',
  }: ICompanyRepositoryFindById): Promise<CompanyModel> {
    return this.compRepo
      .createQueryBuilder('comp')
      .select(selectFields)
      .where(`comp_id = ${id}`)
      .getRawOne();
  }

  async create({
    cnpj,
    name,
    vlan,
  }: ICompanyRepositoryCreate): Promise<CompanyModel> {
    const comp = this.compRepo.create({
      comp_cnpj: cnpj,
      comp_name: name,
      comp_vlan: vlan,
    });

    await this.compRepo.save(comp);

    return comp;
  }

  async update({
    cnpj,
    id,
    name,
    vlan,
  }: ICompanyRepositoryUpdate): Promise<CompanyModel> {
    await this.compRepo.update(
      { comp_id: id },
      { comp_cnpj: cnpj, comp_name: name, comp_vlan: vlan },
    );

    return this.findById({ id });
  }
}
