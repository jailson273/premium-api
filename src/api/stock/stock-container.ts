import { asClass } from "awilix";
import { StockService } from "./stock-service";
import { StockRepository } from "./stock-repository";

export default {
    stockService: asClass(StockService).singleton(),
    stockRepository: asClass(StockRepository).singleton(),
};
