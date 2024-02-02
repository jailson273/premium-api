import { RepositoryBase } from "@api/base/repository-base";
import { CostCenter } from "./cost-center-entity";
import { CostCenterRepositoryInterface } from "./interface/cost-center-repository-interface";

export class CostCenterRepository extends RepositoryBase<CostCenter> implements CostCenterRepositoryInterface {
    constructor() {
        super(CostCenter);
    }
}
