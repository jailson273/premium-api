import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { CashBox } from "./cash-box-entity";

@route("cash-box")
export class CashBoxController extends ControllerBase<CashBox> {
    constructor({ cashBoxService }) {
        super(cashBoxService);
    }
}
