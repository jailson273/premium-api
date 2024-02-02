import { asClass } from "awilix";
import { CustomerRepository } from "./customer-repository";
import { CustomerService } from "./customer-service";

export default {
    customerService: asClass(CustomerService).singleton(),
    customerRepository: asClass(CustomerRepository).singleton(),
};
