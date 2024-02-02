import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { BankAccountStatement } from "./bank-account-statement-entity";

@route("/back-account-statement")
export class BankAccountStatementController extends ControllerBase<BankAccountStatement> {
    constructor({ bankAccountstatementService }) {
        super(bankAccountstatementService);
    }
}
