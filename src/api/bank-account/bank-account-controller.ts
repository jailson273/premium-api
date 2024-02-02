import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { BankAccount } from "./bank-account-entity";

@route("/back-account")
export class BankAccountController extends ControllerBase<BankAccount> {
    constructor({ bankAccountService }) {
        super(bankAccountService);
    }
}
