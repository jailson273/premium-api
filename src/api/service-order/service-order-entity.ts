import { Column, Entity } from "typeorm";
import { EntityBase } from "@api/base/entity-base";

@Entity()
export class ServiceOrder extends EntityBase {
    @Column()
    financialRelease: boolean;
    // Lançado no Financeiro

    @Column()
    downStock: boolean;
    // Baixado Estoque
}
