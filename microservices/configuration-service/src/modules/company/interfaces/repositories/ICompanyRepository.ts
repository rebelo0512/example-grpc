import { IRepositoryDefaultFields } from 'src/shared/external-pkg/typeorm/interfaces/IRepositoryDefaultFields';
import { CompanyModel } from '../../externals-pkg/typeorm/models/CompanyModel.entity';
import {
  ICompanyRepositoryCreate,
  ICompanyRepositoryFindById,
  ICompanyRepositoryUpdate,
} from './repo-interfaces/ICompanyRepositoryInterfaces';

export interface ICompanyRepository {
  getAll(
    fields: IRepositoryDefaultFields<CompanyModel>,
  ): Promise<CompanyModel[]>;
  findById(fields: ICompanyRepositoryFindById): Promise<CompanyModel>;
  create(fields: ICompanyRepositoryCreate): Promise<CompanyModel>;
  update(fields: ICompanyRepositoryUpdate): Promise<CompanyModel>;
}
