import { asClass } from "awilix";
import { UserConsumer } from "./user-consumer";
import { UserRepository } from "./user-repository";
import { UserService } from "./user-service";

export default {
    userService: asClass(UserService).singleton(),
    userRepository: asClass(UserRepository).singleton(),
    userConsumer: asClass(UserConsumer).singleton(),
};
