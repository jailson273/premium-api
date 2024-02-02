import { Employee } from "../employee-entity";

export interface EmployeeProducerInterface {
    publishEmployeeCreated(employee: Employee): void;
}
