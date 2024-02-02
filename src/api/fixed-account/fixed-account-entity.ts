import { EntityBase } from "@api/base/entity-base";
import { Column, Entity } from "typeorm";

@Entity()
export class FixedAccount extends EntityBase {
    @Column()
    name: string;
}
