import { asClass } from "awilix";
import { BankAccountRepository } from "./bank-account-repository";
import { BankAccountService } from "./bank-account-service";

export default {
    bankAccountService: asClass(BankAccountService).singleton(),
    bankAccountRepository: asClass(BankAccountRepository).singleton(),
};
