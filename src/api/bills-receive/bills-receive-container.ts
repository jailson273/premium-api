import { asClass } from "awilix";
import { BillsReceiveRepository } from "./bills-receive-repository";
import { BillsReceiveService } from "./bills-receive-service";

export default {
    billsReceiveService: asClass(BillsReceiveService).singleton(),
    billsReceiveRepository: asClass(BillsReceiveRepository).singleton(),
};
