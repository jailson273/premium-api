import { ServiceBase } from "@api/base/service-base";
import { BankAccount } from "./bank-account-entity";
import { BankAccountServiceInterface } from "./interface/bank-account-service-interface";

export class BankAccountService extends ServiceBase<BankAccount> implements BankAccountServiceInterface {
    constructor({ bankAccountRepository }) {
        super(bankAccountRepository);
    }
}
