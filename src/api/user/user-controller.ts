import { route } from "awilix-express";
import { ControllerBase } from "@api/base/controller-base";
import { User } from "./user-entity";
import { UserServiceInterface } from "./interface/user-service-interface";

@route("/user")
export class UserController extends ControllerBase<User> {
    private userService: UserServiceInterface;

    constructor({ userService }) {
        super(userService);
        this.userService = userService;
    }

    async getAll(request, response) {
        const users = await this.userService.getUsersInformation();
        return response.status(200).send(users);
    }
}
