import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { BillsReceive } from "./bills-receive-entity";

@route("bills-receive")
export class BillsReceiveController extends ControllerBase<BillsReceive> {
    constructor({ billsReceiveService }) {
        super(billsReceiveService);
    }
}
