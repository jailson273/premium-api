import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { Customer } from "./customer-entity";

@route("/customer")
export class CustomerController extends ControllerBase<Customer> {
    constructor({ customerService }) {
        super(customerService);
    }
}
