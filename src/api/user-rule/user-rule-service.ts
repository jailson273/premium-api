import { ServiceBase } from "@api/base/service-base";
import { ErrorUtil } from "@util/error";
import { UserRuleRepositoryInterface } from "./interface/user-rule-repository-interface";
import { UserRuleServiceInterface } from "./interface/user-rule-service-interface";
import { UserRule } from "./user-rule-entity";

export class UserRuleService extends ServiceBase<UserRule> implements UserRuleServiceInterface {
    private userRuleRepository: UserRuleRepositoryInterface;

    constructor({ userRuleRepository }) {
        super(userRuleRepository);
        this.userRuleRepository = userRuleRepository;
    }

    async create(rule: UserRule): Promise<UserRule> {
        rule.ruleCode = `${rule.action.toLowerCase()}-${rule.module}`;
        const ruleExists = await this.userRuleRepository.getRuleByRuleCode(rule.ruleCode);
        if (ruleExists) {
            throw new ErrorUtil.RecordAlreadyExistError("Já existe uma regra com esses parametros", { ruleExists });
        }

        return this.repository.create(rule);
    }
}
