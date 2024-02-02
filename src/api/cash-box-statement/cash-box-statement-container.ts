import { asClass } from "awilix";
import { CashBoxStatementRepository } from "./cash-box-statement-repository";
import { CashBoxStatementService } from "./cash-box-statement-service";

export default {
    cashBoxStatementService: asClass(CashBoxStatementService).singleton(),
    cashBoxStatementRepository: asClass(CashBoxStatementRepository).singleton(),
};
