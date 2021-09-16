import { CompanyModel } from '../../externals-pkg/typeorm/models/CompanyModel.entity';

export interface ICompanyGetAllReturnDTO {
  companies: CompanyModel[];
}

export interface ICompanyCreateDTO {
  name: string;
  cnpj: string;
  vlan: number;
}

export interface ICompanyUpdateDTO {
  id: number;
  name: string;
  cnpj: string;
  vlan: number;
}
