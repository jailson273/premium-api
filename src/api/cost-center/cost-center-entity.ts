import { Column, Entity } from "typeorm";
import { EntityBase } from "@api/base/entity-base";

@Entity()
export class CostCenter extends EntityBase {
    @Column()
    name: string;
}
