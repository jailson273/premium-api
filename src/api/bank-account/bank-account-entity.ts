import { EntityBase } from "@api/base/entity-base";
import { Column, Entity } from "typeorm";

@Entity()
export class BankAccount extends EntityBase {
    @Column()
    agency?: string;

    @Column()
    account?: string;
}
