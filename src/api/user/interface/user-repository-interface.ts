import { RepositoryBase } from "@api/base/repository-base";
import { User } from "@api/user/user-entity";

export interface UserRepositoryInterface extends RepositoryBase<User> {
    getUserByEmail(email: string): Promise<User>;
    getUserByUserCode(userCode: string): Promise<User>;
    getUserByEmployeeId(employeeId: number): Promise<User>;
    getUsersInformation(): Promise<any[]>;
}
