import { User } from "@api/user/user-entity";
import { LoginEmail, LoginUserCode } from "../auth-entity";

export interface AuthRepositoryInterface {
    getUserByEmail(login: LoginEmail): Promise<User>;
    getUserByUserCode(login: LoginUserCode): Promise<User>;
    verifyUserRule(userId: number, ruleCode: string): Promise<boolean>;
}
