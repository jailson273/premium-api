import { ServiceBase } from "@api/base/service-base";
import { CashBoxStatement } from "./cash-box-statement-entity";
import { CashBoxStatementServiceInterface } from "./interface/cash-box-statement-service-interface";

export class CashBoxStatementService extends ServiceBase<CashBoxStatement> implements CashBoxStatementServiceInterface {
    constructor({ cashBoxStatementRepository }) {
        super(cashBoxStatementRepository);
    }
}
