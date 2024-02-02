import { RepositoryBase } from "@api/base/repository-base";
import { StockRepositoryInterface } from "./interface/stock-repository-interface";
import { Stock } from "./stock-entity";

export class StockRepository extends RepositoryBase<Stock> implements StockRepositoryInterface {
    constructor() {
        super(Stock);
    }
}
