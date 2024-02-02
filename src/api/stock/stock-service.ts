import { ServiceBase } from "@api/base/service-base";
import { StockServiceInterface } from "./interface/stock-service-interface";
import { Stock } from "./stock-entity";

export class StockService extends ServiceBase<Stock> implements StockServiceInterface {
    constructor({ stockRepository }) {
        super(stockRepository);
    }
}
