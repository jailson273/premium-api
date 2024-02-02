import { RepositoryBase } from "@api/base/repository-base";
import { SaleRepositoryInterface } from "./interface/sale-repository-interface";
import { Sale } from "./sale.entity";

export class SaleRepository extends RepositoryBase<Sale> implements SaleRepositoryInterface {
    constructor() {
        super(Sale);
    }
}
