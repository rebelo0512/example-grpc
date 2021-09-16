/* eslint-disable camelcase */
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseModel {
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'NOW()',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'NOW()',
  })
  updated_at: Date;
}
