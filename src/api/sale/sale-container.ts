import { asClass } from "awilix";
import { SaleRepository } from "./sale-repository";
import { SaleService } from "./sale-service";

export default {
    saleService: asClass(SaleService).singleton(),
    saleRepository: asClass(SaleRepository).singleton(),
};
