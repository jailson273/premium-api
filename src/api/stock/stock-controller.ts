import { route } from "awilix-express";
import { ControllerBase } from "@api/base/controller-base";
import { Stock } from "./stock-entity";

@route("/stock")
export class StockController extends ControllerBase<Stock> {
    constructor({ stockService }) {
        super(stockService);
    }
}
