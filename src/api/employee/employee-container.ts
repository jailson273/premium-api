import { asClass } from "awilix";
import { EmployeeProducer } from "./employee-producer";
import { EmployeeRepository } from "./employee-repository";
import { EmployeeService } from "./employee-service";

export default {
    employeeService: asClass(EmployeeService).singleton(),
    employeeRepository: asClass(EmployeeRepository).singleton(),
    employeeProducer: asClass(EmployeeProducer).singleton(),
};
