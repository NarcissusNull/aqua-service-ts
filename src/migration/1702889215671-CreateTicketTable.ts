import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTicketTable1702889215671 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "water_ticket",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    length: "36",
                    isPrimary: true,
                    generationStrategy: "uuid"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "is_distributed",
                    type: "boolean",
                    default: false
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("water_ticket");
    }
}
