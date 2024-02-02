import { EntityBase } from "@api/base/entity-base";
import { Column, Entity } from "typeorm";

@Entity()
export class CashBox extends EntityBase {
    @Column()
    nameUser: string;
}
