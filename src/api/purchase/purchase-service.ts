import { ServiceBase } from "@api/base/service-base";
import { PurchaseServiceInterface } from "./interface/purchase-service-interface";
import { Purchase } from "./purchase-entity";

export class PurchaseService extends ServiceBase<Purchase> implements PurchaseServiceInterface {
    constructor({ purchaseRepository }) {
        super(purchaseRepository);
    }
}
