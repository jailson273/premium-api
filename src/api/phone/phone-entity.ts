import { Column, Entity, ManyToOne } from "typeorm";
import { EntityBase } from "@api/base/entity-base";
import { PhoneType } from "./enum/phone-type-enum";
import { Customer } from "@api/customer/customer-entity";
import { Company } from "@api/company/company-entity";
import { Provider } from "@api/provider/provider-entity";

@Entity()
export class Phone extends EntityBase {
    @Column()
    ddi: string;

    @Column()
    ddd: string;

    @Column()
    number: string;

    @Column()
    phoneType: PhoneType;

    @Column()
    default: boolean;

    @Column({ nullable: true })
    companyId?: number;

    @Column({ nullable: true })
    customerId?: number;

    @ManyToOne(() => Customer, c => c.phones)
    customer?: Customer;

    @ManyToOne(() => Company, c => c.phones)
    company?: Company;

    @ManyToOne(() => Provider, c => c.phones)
    provider?: Provider;
}
