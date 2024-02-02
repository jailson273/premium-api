import { asClass } from "awilix";
import { CashBoxRepository } from "./cash-box-repository";
import { CashBoxService } from "./cash-box-service";

export default {
    cashBoxService: asClass(CashBoxService).singleton(),
    cashBoxRepository: asClass(CashBoxRepository).singleton(),
};
