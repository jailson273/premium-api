import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { FixedAccount } from "./fixed-account-entity";

@route("fixed-account")
export class FixedAccountController extends ControllerBase<FixedAccount> {
    constructor({ fixedAccountService }) {
        super(fixedAccountService);
    }
}
