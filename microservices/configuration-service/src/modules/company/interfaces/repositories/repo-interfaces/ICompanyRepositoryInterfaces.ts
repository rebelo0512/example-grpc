import { CompanyModel } from 'src/modules/company/external-pkgs/typeorm/models/CompanyModel.entity';
import {
  IRepositoryDefaultFields,
  IRepositoryIdField,
} from 'src/shared/external-pkg/typeorm/interfaces/IRepositoryDefaultFields';

export interface ICompanyRepositoryFindById
  extends IRepositoryDefaultFields<CompanyModel>,
    IRepositoryIdField {}

export interface ICompanyRepositoryCreate {
  name: string;
  cnpj: string;
  vlan: number;
}

export interface ICompanyRepositoryUpdate extends IRepositoryIdField {
  name: string;
  cnpj: string;
  vlan: number;
}
