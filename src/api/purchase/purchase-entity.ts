import { EntityBase } from "@api/base/entity-base";
import { Column, Entity } from "typeorm";

@Entity()
export class Purchase extends EntityBase {
    @Column()
    financialRelease: boolean;
    // Lançado no Financeiro

    @Column()
    downStock: boolean;
    // Baixado Estoque
}
