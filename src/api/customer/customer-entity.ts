import { Address } from "@api/address/address-entity";
import { EntityBase } from "@api/base/entity-base";
import { Phone } from "@api/phone/phone-entity";
import { CustomerType } from "./enum/customer-type-enum";
import { DocumentType } from "@api/base/enum/document-type-enum";
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";

@Entity()
export class Customer extends EntityBase {
    @Column()
    name: string;

    @Column()
    customerType: CustomerType;

    @Column()
    document?: string;

    @Column()
    documentType?: DocumentType;

    @OneToMany(() => Phone, p => p.customer)
    @JoinColumn()
    phones?: Phone[];

    @OneToMany(() => Address, a => a.customer)
    @JoinColumn()
    addresses?: Address[];

    @Column({ nullable: true })
    dateOfBirth?: Date;

    @Column({ nullable: true })
    socialName?: string;

    @Column({ nullable: true })
    alias?: string;

    @Column({ nullable: true })
    note?: string;

    @Column({ default: false })
    restriction?: boolean;

    @Column({ nullable: true })
    restrictionText?: string;

    @Column({ nullable: true })
    restrictionNote?: string;
}
