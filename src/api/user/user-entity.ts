import { Entity, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { EntityBase } from "@api/base/entity-base";
import { Employee } from "@api/employee/employee-entity";
import { UserGroup } from "@api/user-group/user-group-entity";

@Entity()
export class User extends EntityBase {
    @Column()
    userCode: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false, nullable: true })
    password?: string;

    @Column()
    employeeId: number;

    @Column({ nullable: true })
    userGroupId?: number;

    @OneToOne(() => Employee, e => e.id)
    @JoinColumn()
    employee: Employee;

    @ManyToOne(() => UserGroup, g => g.user)
    @JoinColumn()
    userGroup?: UserGroup;
}
