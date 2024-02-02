import { asClass } from "awilix";
import { BankAccountStatementRepository } from "./bank-account-statement-repository";
import { BankAccountStatementService } from "./bank-account-statement-service";

export default {
    bankAccountstatementService: asClass(BankAccountStatementService).singleton(),
    bankAccountstatementRepository: asClass(BankAccountStatementRepository).singleton(),
};
