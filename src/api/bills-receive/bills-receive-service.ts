import { ServiceBase } from "@api/base/service-base";
import { BillsReceive } from "./bills-receive-entity";
import { BillsReceiveServiceInterface } from "./interface/bills-receive-service-interface";

export class BillsReceiveService extends ServiceBase<BillsReceive> implements BillsReceiveServiceInterface {
    constructor({ billsReceiveRepository }) {
        super(billsReceiveRepository);
    }
}
