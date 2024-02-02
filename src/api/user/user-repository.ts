import { RepositoryBase } from "@api/base/repository-base";
import { UserRepositoryInterface } from "./interface/user-repository-interface";
import { User } from "./user-entity";

export class UserRepository extends RepositoryBase<User> implements UserRepositoryInterface {
    constructor() {
        super(User);
    }

    async getUserByEmail(email: string): Promise<User> {
        return this.db.findOne({ where: { email } });
    }

    async getUserByUserCode(userCode: string): Promise<User> {
        return this.db.findOne({ where: { userCode } });
    }

    async getUserByEmployeeId(employeeId: number): Promise<User> {
        return this.db.findOne({ where: { employeeId } });
    }

    async getUsersInformation(): Promise<any[]> {
        return await this.db
            .createQueryBuilder("user")
            .select("user.id", "id")
            .addSelect("user.active", "active")
            .addSelect("user.userCode", "userCode")
            .addSelect("user.email", "email")
            .addSelect("user.createdAt", "createdAt")
            .addSelect("user.updatedAt", "updatedAt")
            .addSelect("employee.id", "employeeId")
            .addSelect("employee.name", "name")
            .addSelect("userGroup.name", "group")
            .innerJoin("user.employee", "employee", "user.employeeId = employee.id")
            .leftJoin("user.userGroup", "userGroup", "user.userGroupId = userGroup.id")
            .execute();
    }
}
