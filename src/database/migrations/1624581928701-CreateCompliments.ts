import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCompliments1624581928701 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "elogios",
            columns: [
                {
                    name: "uid",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "user_sender",
                    type: "uuid",
                },
                {
                    name: "user_receiver",
                    type: "uuid",
                },
                {
                    name: "tag_id",
                    type: "uuid",
                },
                {
                    name: "mensagem",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: 'now()',
                },
            ],
            foreignKeys: [
                {
                    name: "FKUserSenderElogios",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ['user_sender'],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL",
                }, {
                    name: "FKUserReceiverElogios",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ['user_receiver'],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL",
                }, {
                    name: "FKUserElogios",
                    referencedTableName: "tags",
                    referencedColumnNames: ["id"],
                    columnNames: ['tag_id'],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL",
                },
            ]
        }))

        // await queryRunner.createForeignKey(
        //     "elogios",
        //     new TableForeignKey({
        //         name: "FKUserSenderElogios",
        //         referencedTableName: "users",
        //         referencedColumnNames: ["id"],
        //         columnNames: ['user_sender'],
        //         onDelete: "SET NULL",
        //         onUpdate: "SET NULL",
        //     })
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("elogios")
    }

}
