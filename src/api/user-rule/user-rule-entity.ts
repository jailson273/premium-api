import { EntityBase } from "@api/base/entity-base";
import { UserGroup } from "@api/user-group/user-group-entity";
import { RuleAction } from "./enum/rule-action-enum";
import { RuleModule } from "./enum/rule-module-enum";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

@Entity()
export class UserRule extends EntityBase {
    @Column()
    name: string;

    @Column()
    action: RuleAction;

    @Column()
    module: RuleModule;

    @Column({ unique: true })
    ruleCode: string;

    @Column()
    description?: string;

    @ManyToMany(() => UserGroup)
    @JoinTable({
        name: "user_group_rule",
        joinColumn: {
            name: "ruleCode",
            referencedColumnName: "ruleCode",
        },
        inverseJoinColumn: {
            name: "userGroupId",
            referencedColumnName: "id",
        },
    })
    userGoups: UserGroup[];
}
