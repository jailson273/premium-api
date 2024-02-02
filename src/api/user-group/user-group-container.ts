import { asClass } from "awilix";
import { UserGroupRepository } from "./user-group-repository";
import { UserGroupService } from "./user-group-service";

export default {
    userGroupService: asClass(UserGroupService).singleton(),
    userGroupRepository: asClass(UserGroupRepository).singleton(),
};
