import { Auth, LoginEmail, LoginUserCode } from "../auth-entity";

export interface AuthServiceInterface {
    login(login: LoginEmail | LoginUserCode): Promise<Auth>;
    verifyUserRule(userId: number, ruleCode: string): Promise<boolean>;
}
