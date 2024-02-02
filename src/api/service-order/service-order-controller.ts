import { ControllerBase } from "@api/base/controller-base";
import { ServiceOrder } from "./service-order-entity";
import { route } from "awilix-express";

@route("/service-order")
export class ServiceOrderController extends ControllerBase<ServiceOrder> {
    constructor({ serviceOrderService }) {
        super(serviceOrderService);
    }
}
