import _ from "lodash";
import { ServiceBase } from "@api/base/service-base";
import { UserServiceInterface } from "./interface/user-service-interface";
import { User } from "./user-entity";
import { ErrorUtil } from "@util/error";
import { UserRepositoryInterface } from "./interface/user-repository-interface";
import { Encrypt } from "@util/encrypt";
import { EmployeeRepositoryInterface } from "@api/employee/interface/employee-repository-interface";
export class UserService extends ServiceBase<User> implements UserServiceInterface {
    private userRepository: UserRepositoryInterface;
    private employeeRepository: EmployeeRepositoryInterface;

    constructor({ userRepository, employeeRepository }) {
        super(userRepository);
        this.userRepository = userRepository;
        this.employeeRepository = employeeRepository;
    }

    async getUsersInformation(): Promise<any[]> {
        const users = await this.userRepository.getUsersInformation();
        return users;
    }

    getByEmployeeId(employeeId: number): Promise<User> {
        return this.userRepository.getUserByEmployeeId(employeeId);
    }

    async create(user: User): Promise<User> {
        this.verifyFields(user);

        const userExist = await this.verifyUserExist(user);
        if (userExist) {
            throw new ErrorUtil.RecordAlreadyExistError("Usuário já cadastrado", { user: userExist });
        }

        const employee = await this.employeeRepository.getById(user.employeeId);
        if (!employee) {
            throw new ErrorUtil.PropertyValueInvalidError("Id de funcionário inválido, já cadastrado.", {
                employeeId: user.employeeId,
            });
        }

        user.userCode = user.email;
        user.password = user.password && Encrypt.encryptPassword(user.password);

        const created = await this.repository.create(user);
        Reflect.deleteProperty(created, "password");
        return created;
    }

    private async verifyUserExist({ employeeId, email }): Promise<User> {
        const userByEmail = await this.userRepository.getUserByEmail(email);
        const userByEmpolyeeId = await this.userRepository.getUserByEmployeeId(employeeId);
        return userByEmail ?? userByEmpolyeeId;
    }

    private verifyFields(user: User): void {
        const fields = _.keys(user);
        const requiredFields = _.filter(["email", "employeeId"], key => !fields.includes(key));
        if (requiredFields.length > 0) {
            throw new ErrorUtil.PropertyRequiredError("Campos obrigatorios não foram enviados", requiredFields);
        }
    }
}
