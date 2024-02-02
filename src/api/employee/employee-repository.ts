import { RepositoryBase } from "@api/base/repository-base";
import { Employee } from "./employee-entity";
import { EmployeeRepositoryInterface } from "./interface/employee-repository-interface";

export class EmployeeRepository extends RepositoryBase<Employee> implements EmployeeRepositoryInterface {
    constructor() {
        super(Employee);
    }
}
