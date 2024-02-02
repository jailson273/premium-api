import { ServiceBase } from "@api/base/service-base";
import { User } from "@api/user/user-entity";

export interface UserServiceInterface extends ServiceBase<User> {
    getUsersInformation(): Promise<any[]>;
    getByEmployeeId(employeeId: number): Promise<User>;
}
