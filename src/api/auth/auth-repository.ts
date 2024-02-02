import { User } from "@api/user/user-entity";
import { getConnection, Repository } from "typeorm";
import { LoginEmail, LoginUserCode } from "./auth-entity";
import { AuthRepositoryInterface } from "./interface/auth-repository-interface";

export class AuthRepository implements AuthRepositoryInterface {
    private db: Repository<User>;
    constructor() {
        this.db = getConnection().getRepository<User>(User);
    }

    async getUserByEmail(login: LoginEmail): Promise<User> {
        return this.db.findOne({ where: { email: login.email }, select: ["id", "email", "userCode", "password"] });
    }

    async getUserByUserCode(login: LoginUserCode): Promise<User> {
        return this.db.findOne({
            where: { userCode: login.userCode },
            select: ["id", "email", "userCode", "password"],
        });
    }

    async verifyUserRule(userId: number, ruleCode: string): Promise<boolean> {
        const userRule = await this.db
            .createQueryBuilder("u")
            .select("u.id", "userId")
            .addSelect("ug.name", "groupName")
            .addSelect("ugr.ruleCode", "ruleCode")
            .innerJoin("user_group", "ug", "ug.id = u.userGroupId")
            .innerJoin("user_group_rule", "ugr", "ug.id = ugr.userGroupId")
            .where("u.id = :userId", { userId })
            .andWhere("ugr.ruleCode = :ruleCode", { ruleCode })
            .limit(1)
            .execute();

        return userRule && userRule.length > 0;
    }
}
