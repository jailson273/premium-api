import { ServiceBase } from "@api/base/service-base";
import { ServiceOrderServiceInterface } from "./interface/service-order-service-interface";
import { ServiceOrder } from "./service-order-entity";

export class ServiceOrderService extends ServiceBase<ServiceOrder> implements ServiceOrderServiceInterface {
    constructor({ serviceOrderRepository }) {
        super(serviceOrderRepository);
    }
}
