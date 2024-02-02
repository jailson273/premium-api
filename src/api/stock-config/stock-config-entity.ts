import { Entity, JoinColumn, OneToOne } from "typeorm";
import { EntityBase } from "@api/base/entity-base";
import { Company } from "@api/company/company-entity";

@Entity()
export class StockConfig extends EntityBase {
    @OneToOne(() => Company, c => c.id)
    @JoinColumn()
    company: Company;
}
