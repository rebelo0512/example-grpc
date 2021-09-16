export interface IRepositoryDefaultFields<T> {
  selectFields?: string;
  fieldOrder?: keyof T;
  orderBy?: 'ASC' | 'DESC';
}

export interface IRepositoryIdField {
  id: number;
}
