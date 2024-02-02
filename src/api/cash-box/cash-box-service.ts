import { ServiceBase } from "@api/base/service-base";
import { CashBox } from "./cash-box-entity";
import { CashBoxServiceInterface } from "./interface/cash-box-service-interface";

export class CashBoxService extends ServiceBase<CashBox> implements CashBoxServiceInterface {
    constructor({ cashBoxRepository }) {
        super(cashBoxRepository);
    }
}
