import { Address } from "@api/address/address-entity";
import { EntityBase } from "@api/base/entity-base";
import { DocumentType } from "@api/base/enum/document-type-enum";
import { Phone } from "@api/phone/phone-entity";
import { Column, Entity, OneToMany } from "typeorm";
@Entity()
export class Provider extends EntityBase {
    @Column()
    name: string;

    @Column()
    document?: string;

    @Column()
    documentType?: DocumentType;

    @OneToMany(() => Phone, p => p.provider)
    phones?: Phone[];

    @OneToMany(() => Address, a => a.provider)
    addresses?: Address[];

    @Column({ nullable: true })
    dateOfBirth?: Date;

    @Column({ nullable: true })
    socialName?: string;

    @Column({ nullable: true })
    alias?: string;
}
