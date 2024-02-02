import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-router-core";
import { Sale } from "./sale.entity";

@route("/sale")
export class SaleController extends ControllerBase<Sale> {
    constructor({ saleService }) {
        super(saleService);
    }
}
