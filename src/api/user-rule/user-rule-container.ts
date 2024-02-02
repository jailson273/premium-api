import { asClass } from "awilix";
import { UserRuleRepository } from "./user-rule-repository";
import { UserRuleService } from "./user-rule-service";

export default {
    userRuleService: asClass(UserRuleService).singleton(),
    userRuleRepository: asClass(UserRuleRepository).singleton(),
};
