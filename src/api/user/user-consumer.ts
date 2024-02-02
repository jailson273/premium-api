import { ConsumerBase } from "@api/base/consumer-base";
import { Employee } from "@api/employee/employee-entity";
import { EmployeeTopic } from "@api/employee/employee-topic";
import { NotificationInterface } from "@util/notification/interface/notification-interface";
import { UserConsumerInterface } from "./interface/user-consumer-interface";
import { UserServiceInterface } from "./interface/user-service-interface";
import { User } from "./user-entity";

export class UserConsumer extends ConsumerBase implements UserConsumerInterface {
    private userService: UserServiceInterface;
    private notification: NotificationInterface;

    constructor({ userService, notification }) {
        super();
        this.userService = userService;
        this.notification = notification;
    }

    subscribeToTopics(): void {
        this.notification.subscribe(EmployeeTopic.EMPLOYEE_CREATED, this.createUserWhenEmployeeIsCreated.bind(this));
        this.notification.subscribe(EmployeeTopic.EMPLOYEE_UPDATED, this.updateUserWhenEmployeeIsUpdated.bind(this));
    }

    private createUserWhenEmployeeIsCreated(message: any, data: Employee): void {
        const user = {
            email: data.email,
            employeeId: data.id,
        } as User;

        this.userService.create(user);
    }

    private async updateUserWhenEmployeeIsUpdated(message: any, data: Employee): Promise<void> {
        const { id, email } = data;
        const user = await this.userService.getByEmployeeId(id);
        this.userService.update(user.id, { email } as User);
    }
}
