import { RepositoryBase } from "@api/base/repository-base";
import { UserRule } from "../user-rule-entity";

export interface UserRuleRepositoryInterface extends RepositoryBase<UserRule> {
    getRuleByRuleCode(ruleCode: string): Promise<UserRule>;
}
