import { RepositoryBase } from "@api/base/repository-base";
import { BankAccount } from "./bank-account-entity";
import { BankAccountRepositoryInterface } from "./interface/bank-account-repository-interface";

export class BankAccountRepository extends RepositoryBase<BankAccount> implements BankAccountRepositoryInterface {
    constructor() {
        super(BankAccount);
    }
}
