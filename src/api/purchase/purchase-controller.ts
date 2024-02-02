import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { Purchase } from "./purchase-entity";

@route("/purchase")
export class PurchaseController extends ControllerBase<Purchase> {
    constructor({ purchaseService }) {
        super(purchaseService);
    }
}
