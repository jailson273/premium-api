import { asClass } from "awilix";
import { AuthRepository } from "./auth-repository";
import { AuthService } from "./auth-service";

export default {
    authService: asClass(AuthService).singleton(),
    authRepository: asClass(AuthRepository).singleton(),
};
