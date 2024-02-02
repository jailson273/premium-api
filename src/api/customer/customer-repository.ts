import { RepositoryBase } from "@api/base/repository-base";
import { Customer } from "./customer-entity";
import { CustomerRepositoryInterface } from "./interface/customer-repository-interface";

export class CustomerRepository extends RepositoryBase<Customer> implements CustomerRepositoryInterface {
    constructor() {
        super(Customer);
    }
}
