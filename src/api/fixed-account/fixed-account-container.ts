import { asClass } from "awilix";
import { FixedAccountRepository } from "./fixed-account-repository";
import { FixedAccountService } from "./fixed-account-service";

export default {
    fixedAccountService: asClass(FixedAccountService).singleton(),
    fixedAccountRepository: asClass(FixedAccountRepository).singleton(),
};
