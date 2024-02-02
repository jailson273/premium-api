import { EntityBase } from "@api/base/entity-base";
import { Column, Entity } from "typeorm";

@Entity()
export class FormOfPayment extends EntityBase {
    @Column()
    name: string;

    @Column()
    dischargeAccount: boolean;
}
