/* eslint-disable camelcase */
import { Observable } from 'rxjs';
import { IGrpcDefaultDateField } from '../../../interfaces/IGrpcDefaultFields';

export interface CompanyInterface extends IGrpcDefaultDateField {
  comp_id: number;
  comp_name: string;
  comp_cnpj: string;
  comp_vlan: number;
}

export interface ICompanyGrpcServiceFindById {
  id: number;
}

export interface ICompanyGrpcServiceCreate {
  name: string;
  cnpj: string;
  vlan: number;
}

export interface ICompanyGrpcServiceUpdate {
  id: number;
  name: string;
  cnpj: string;
  vlan: number;
}

export interface ICompanyGrpcService {
  getAll({}): Observable<{ companies: CompanyInterface[] }>;
  findById(fields: ICompanyGrpcServiceFindById): Observable<CompanyInterface>;
  create(fields: ICompanyGrpcServiceCreate): Observable<CompanyInterface>;
  update(fields: ICompanyGrpcServiceUpdate): Observable<CompanyInterface>;
}
