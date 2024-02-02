import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { Employee } from "./employee-entity";

@route("/employee")
export class EmployeeController extends ControllerBase<Employee> {
    constructor({ employeeService }) {
        super(employeeService);
    }
}
