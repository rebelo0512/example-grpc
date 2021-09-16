import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { date_default_columns } from "../default-columns";

export class createCompanies1620333714287 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "companies",
        columns: [
          {
            name: "comp_id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
            isGenerated: true,
          },
          {
            name: "comp_name",
            type: "varchar",
            length: "255",
            isUnique: true,
          },
          {
            name: "comp_cnpj",
            type: "varchar",
            length: "255",
            isUnique: true,
          },
          {
            name: 'comp_vlan',
            type: 'int',
            default: 0,
          },
          ...date_default_columns,
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("companies");
  }
}
