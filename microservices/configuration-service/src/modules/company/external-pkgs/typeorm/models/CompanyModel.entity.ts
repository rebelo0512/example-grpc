/* eslint-disable camelcase */
import { BaseModel } from 'src/shared/external-pkg/typeorm/models/BaseModel.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('companies')
export class CompanyModel extends BaseModel {
  @PrimaryGeneratedColumn('increment')
  comp_id: number;

  @Column({ length: 255 })
  comp_name: string;

  @Column({ length: 255 })
  comp_cnpj: string;

  @Column({ default: 0 })
  comp_vlan: number;

  @BeforeInsert()
  @BeforeUpdate()
  fieldsToUpperCase(): void {
    this.comp_name = this.comp_name.toUpperCase();
  }
}
