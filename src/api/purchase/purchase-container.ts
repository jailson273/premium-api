import { asClass } from "awilix";
import { PurchaseRepository } from "./purchase-repository";
import { PurchaseService } from "./purchase-service";

export default {
    purchaseService: asClass(PurchaseService).singleton(),
    purchaseRepository: asClass(PurchaseRepository).singleton(),
};
