import { Column, Entity, JoinColumn, ManyToOne, ManyToMany } from "typeorm";
import { EntityBase } from "@api/base/entity-base";
import { AddressType } from "./enum/address-type-enum";
import { Customer } from "@api/customer/customer-entity";
import { Company } from "@api/company/company-entity";
import { Provider } from "@api/provider/provider-entity";

@Entity()
export class Address extends EntityBase {
    @Column()
    postalCode: string;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    neighborhood: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    uf: string;

    @Column()
    addressType: AddressType;

    @Column()
    billing: boolean;

    @Column()
    shipping: boolean;

    @Column({ nullable: true, default: null })
    complement?: string;

    @Column({ nullable: true })
    companyId?: number;

    @Column({ nullable: true })
    customerId?: number;

    @ManyToOne(() => Customer, c => c.addresses)
    customer?: Customer;

    @ManyToOne(() => Company, c => c.addresses)
    company?: Company;

    @ManyToOne(() => Provider, c => c.addresses)
    provider?: Provider;
}
