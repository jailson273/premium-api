import { asClass } from "awilix";
import { BillsPayRepository } from "./bills-pay-repository";
import { BillsPayService } from "./bills-pay-service";

export default {
    billsPayService: asClass(BillsPayService).singleton(),
    billsPayRepository: asClass(BillsPayRepository).singleton(),
};
