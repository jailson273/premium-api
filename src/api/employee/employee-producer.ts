import { NotificationInterface } from "@util/notification/interface/notification-interface";
import { Employee } from "./employee-entity";
import { EmployeeTopic } from "./employee-topic";
import { EmployeeProducerInterface } from "./interface/employee-producer-interface";

export class EmployeeProducer implements EmployeeProducerInterface {
    private notification: NotificationInterface;

    constructor({ notification }) {
        this.notification = notification;
    }

    publishEmployeeCreated(employee: Employee) {
        this.notification.publish(EmployeeTopic.EMPLOYEE_CREATED, employee);
    }

    publishEmployeeUpdated(employee: Employee) {
        this.notification.publish(EmployeeTopic.EMPLOYEE_UPDATED, employee);
    }
}
