import { EntityBase } from "@api/base/entity-base";
import { Column, Entity } from "typeorm";

@Entity()
export class CashBoxStatement extends EntityBase {
    @Column({ default: "0.00", type: "float" })
    transactionAmount: number; // Valor transação
}
