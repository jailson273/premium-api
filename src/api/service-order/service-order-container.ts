import { asClass } from "awilix";
import { ServiceOrderRepository } from "./service-order-repository";
import { ServiceOrderService } from "./service-order-service";

export default {
    serviceOrderService: asClass(ServiceOrderService).singleton(),
    serviceOrderRepository: asClass(ServiceOrderRepository).singleton(),
};
