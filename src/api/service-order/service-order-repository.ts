import { ServiceOrderRepositoryInterface } from "@api/service-order/interface/service-order-repository-interface";
import { RepositoryBase } from "@api/base/repository-base";
import { ServiceOrder } from "./service-order-entity";

export class ServiceOrderRepository extends RepositoryBase<ServiceOrder> implements ServiceOrderRepositoryInterface {
    constructor() {
        super(ServiceOrder);
    }
}
