import { ServiceBase } from "@api/base/service-base";
import { BillsPay } from "./bills-pay-entity";
import { BillsPayServiceInterface } from "./interface/bills-pay-service-interface";

export class BillsPayService extends ServiceBase<BillsPay> implements BillsPayServiceInterface {
    constructor({ billsPayRepository }) {
        super(billsPayRepository);
    }
}
