import { RepositoryBase } from "@api/base/repository-base";
import { PurchaseRepositoryInterface } from "./interface/purchase-repository-interface";
import { Purchase } from "./purchase-entity";

export class PurchaseRepository extends RepositoryBase<Purchase> implements PurchaseRepositoryInterface {
    constructor() {
        super(Purchase);
    }
}
