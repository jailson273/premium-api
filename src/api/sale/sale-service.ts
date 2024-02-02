import { ServiceBase } from "@api/base/service-base";
import { SaleServiceInterface } from "./interface/sale-service-interface";
import { Sale } from "./sale.entity";

export class SaleService extends ServiceBase<Sale> implements SaleServiceInterface {
    constructor({ saleRepository }) {
        super(saleRepository);
    }
}
