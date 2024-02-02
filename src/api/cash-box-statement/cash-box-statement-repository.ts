import { RepositoryBase } from "@api/base/repository-base";
import { CashBoxStatement } from "./cash-box-statement-entity";
import { CashBoxStatementRepositoryInterface } from "./interface/cash-box-statement-repository-interface";

export class CashBoxStatementRepository
    extends RepositoryBase<CashBoxStatement>
    implements CashBoxStatementRepositoryInterface
{
    constructor(cashboxstatementController) {
        super(CashBoxStatement);
    }
}
