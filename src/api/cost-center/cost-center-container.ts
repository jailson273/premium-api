import { asClass } from "awilix";
import { CostCenterRepository } from "./cost-center-repository";
import { CostCenterService } from "./cost-center-service";

export default {
    costCenterService: asClass(CostCenterService).singleton(),
    costCenterRepository: asClass(CostCenterRepository).singleton(),
};
