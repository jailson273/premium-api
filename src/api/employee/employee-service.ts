import { ServiceBase } from "@api/base/service-base";
import { Employee } from "./employee-entity";
import { EmployeeServiceInterface } from "./interface/employee-service-interface";
import { EmployeeProducer } from "./employee-producer";

export class EmployeeService extends ServiceBase<Employee> implements EmployeeServiceInterface {
    private employeeProducer: EmployeeProducer;

    constructor({ employeeRepository, employeeProducer }) {
        super(employeeRepository);
        this.employeeProducer = employeeProducer;
    }

    async create(employee: Employee) {
        const created = await this.repository.create(employee);
        this.employeeProducer.publishEmployeeCreated(created);
        return created;
    }

    async update(id: number, employee: Employee) {
        const updated = await this.repository.update(id, employee);
        this.employeeProducer.publishEmployeeUpdated(updated);
        return updated;
    }
}
