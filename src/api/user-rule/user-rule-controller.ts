import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { UserRule } from "./user-rule-entity";

@route("/user-rule")
export class UserRuleController extends ControllerBase<UserRule> {
    constructor({ userRuleService }) {
        super(userRuleService);
    }
}
