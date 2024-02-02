import { RepositoryBase } from "@api/base/repository-base";
import { BillsPay } from "./bills-pay-entity";
import { BillsPayRepositoryInterface } from "./interface/bills-pay-repository-interface";

export class BillsPayRepository extends RepositoryBase<BillsPay> implements BillsPayRepositoryInterface {
    constructor() {
        super(BillsPay);
    }
}
