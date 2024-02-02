import { ServiceBase } from "@api/base/service-base";
import { BankAccountStatement } from "./bank-account-statement-entity";
import { BankAccountStatementServiceInterface } from "./interface/bank-account-statement-service-interface";

export class BankAccountStatementService
    extends ServiceBase<BankAccountStatement>
    implements BankAccountStatementServiceInterface
{
    constructor({ bankAccountstatementRepository }) {
        super(bankAccountstatementRepository);
    }
}
