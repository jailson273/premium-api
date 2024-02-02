import { EntityBase } from "@api/base/entity-base";
import { UserRule } from "@api/user-rule/user-rule-entity";
import { User } from "@api/user/user-entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany } from "typeorm";

@Entity()
export class UserGroup extends EntityBase {
    @Column({ unique: true })
    name: string;

    @OneToMany(() => User, u => u.userGroupId)
    @JoinColumn()
    user?: User;

    @ManyToMany(() => UserRule)
    @JoinTable({
        name: "user_group_rule",
        joinColumn: {
            name: "userGroupId",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "ruleCode",
            referencedColumnName: "ruleCode",
        },
    })
    userRules?: UserRule[];
}
