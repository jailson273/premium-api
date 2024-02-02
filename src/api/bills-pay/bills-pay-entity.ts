import { EntityBase } from "@api/base/entity-base";
import { Column, Entity } from "typeorm";

@Entity()
export class BillsPay extends EntityBase {
    @Column()
    reference: string;
}
