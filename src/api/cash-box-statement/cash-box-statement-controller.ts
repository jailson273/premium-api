import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { CashBoxStatement } from "./cash-box-statement-entity";

@route("cash-box-statement")
export class CashBoxStatementController extends ControllerBase<CashBoxStatement> {
    constructor({ cashBoxStatementService }) {
        super(cashBoxStatementService);
    }
}
