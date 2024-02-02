import { RepositoryBase } from "@api/base/repository-base";
import { UserRuleRepositoryInterface } from "./interface/user-rule-repository-interface";
import { UserRule } from "./user-rule-entity";

export class UserRuleRepository extends RepositoryBase<UserRule> implements UserRuleRepositoryInterface {
    constructor() {
        super(UserRule);
    }

    async getRuleByRuleCode(ruleCode: string): Promise<UserRule> {
        return this.db.findOne({ where: { ruleCode } });
    }
}
