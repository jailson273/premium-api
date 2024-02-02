import { RepositoryBase } from "@api/base/repository-base";
import { CashBox } from "./cash-box-entity";
import { CashBoxRepositoryInterface } from "./interface/cash-box-repository-interface";

export class CashBoxRepository extends RepositoryBase<CashBox> implements CashBoxRepositoryInterface {
    constructor() {
        super(CashBox);
    }
}
