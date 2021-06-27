import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterarUserAddPassword1624579163486 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", new TableColumn({
            name: "password",
            type: "varchar"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}
