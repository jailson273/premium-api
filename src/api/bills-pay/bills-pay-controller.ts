import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { BillsPay } from "./bills-pay-entity";

@route("/bills-pay")
export class BillsPayController extends ControllerBase<BillsPay> {
    constructor({ billsPayService }) {
        super(billsPayService);
    }
}
