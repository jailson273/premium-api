import { RepositoryBase } from "@api/base/repository-base";
import { BankAccountStatement } from "./bank-account-statement-entity";
import { BankAccountStatementRepositoryInterface } from "./interface/bank-account-statement-repository-interface";

export class BankAccountStatementRepository
    extends RepositoryBase<BankAccountStatement>
    implements BankAccountStatementRepositoryInterface
{
    constructor() {
        super(BankAccountStatement);
    }
}
