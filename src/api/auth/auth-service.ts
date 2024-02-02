import { LoginEmail, Auth, LoginUserCode } from "./auth-entity";
import { AuthRepositoryInterface } from "./interface/auth-repository-interface";
import { AuthServiceInterface } from "./interface/auth-service-interface";
import { ErrorUtil } from "@util/error";
import { User } from "@api/user/user-entity";
import { Encrypt } from "@util/encrypt";
import { Token } from "@util/token";

export class AuthService implements AuthServiceInterface {
    private authRepository: AuthRepositoryInterface;
    constructor({ authRepository }) {
        this.authRepository = authRepository;
    }

    async login(login: LoginEmail | LoginUserCode): Promise<Auth> {
        const user: User = (login as LoginEmail).email
            ? await this.authRepository.getUserByEmail(login as LoginEmail)
            : await this.authRepository.getUserByUserCode(login as LoginUserCode);

        if (!user) {
            throw new ErrorUtil.UnauthorizedError("user not found");
        }
        
        if (!Encrypt.comparePassword(login.password, user.password)) {
            throw new ErrorUtil.UnauthorizedError("usuário ou senha invalidos");
        }

        const auth = Token.sign({ userId: user.id, userEmail: user.email, userCode: user.userCode });

        return auth;
    }

    async verifyUserRule(userId: number, ruleCode: string): Promise<boolean> {
        return this.authRepository.verifyUserRule(userId, ruleCode);
    }
}
