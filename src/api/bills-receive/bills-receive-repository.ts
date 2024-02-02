import { RepositoryBase } from "@api/base/repository-base";
import { BillsReceive } from "./bills-receive-entity";
import { BillsReceiveRepositoryInterface } from "./interface/bills-receive-repository-interface";

export class BillsReceiveRepository extends RepositoryBase<BillsReceive> implements BillsReceiveRepositoryInterface {
    constructor() {
        super(BillsReceive);
    }
}
