import { EntityBase } from "@api/base/entity-base";
import { Company } from "@api/company/company-entity";
import { Occupation } from "./enum/occupation-enum";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Employee extends EntityBase {
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    occupation: Occupation;

    @Column()
    companyId: number;

    @ManyToOne(() => Company, c => c.employees)
    @JoinColumn()
    company: Company;
}
