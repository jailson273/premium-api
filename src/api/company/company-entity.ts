import { Entity, Column, JoinColumn, OneToMany } from "typeorm";
import { EntityBase } from "@api/base/entity-base";
import { DocumentType } from "@api/base/enum/document-type-enum";
import { CompanyCategory } from "./enum/company-category-enum";
import { Address } from "@api/address/address-entity";
import { Phone } from "@api/phone/phone-entity";
import { Employee } from "@api/employee/employee-entity";

@Entity()
export class Company extends EntityBase {
    @Column()
    corporateName: string;

    @Column()
    fantasyName: string;

    @Column()
    ie: string;

    @Column()
    document: string;

    @Column({ default: DocumentType.CNPJ })
    documentType: DocumentType;

    @Column()
    category: CompanyCategory;

    @Column()
    cnae: string;

    @Column()
    headCompany: boolean;

    @OneToMany(() => Phone, p => p.company)
    phones?: Phone[];

    @OneToMany(() => Address, a => a.company)
    @JoinColumn()
    addresses?: Address[];

    @OneToMany(() => Employee, e => e.company)
    @JoinColumn()
    employees?: Employee[];
}
