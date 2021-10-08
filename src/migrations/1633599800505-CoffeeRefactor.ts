import {MigrationInterface, QueryRunner} from "typeorm";

export class CoffeeRefactor1633599800505 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "coffee" RENAME COLUMN "name" To "title"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "coffee" RENAME COLUMN "title" To "name"`,
        )
    }

}
