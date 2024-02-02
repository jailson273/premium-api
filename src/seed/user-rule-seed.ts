import _ from "lodash";
import fs from "fs";
import path from "path";
import { RuleAction } from "@api/user-rule/enum/rule-action-enum";
import { UserRule } from "@api/user-rule/user-rule-entity";
import { UserRuleRepositoryInterface } from "@api/user-rule/interface/user-rule-repository-interface";
import { noSeedRuleModule } from "@util/constant/white-list";
import container from "@container";
export default class UserRuleSeed {
    private userRuleRepository: UserRuleRepositoryInterface;
    constructor() {
        this.userRuleRepository = container.resolve("userRuleRepository");
    }

    private loadData(): UserRule[] {
        const ruleActionsValue = _.map(RuleAction, value => value);
        const ruleModulesValue = fs
            .readdirSync(path.resolve(__dirname, "..", "api"))
            .filter(file => !noSeedRuleModule.includes(file));
        const seedRuleValues = _.reduce(
            ruleModulesValue,
            (prev, curr) => {
                const temp = _.map(ruleActionsValue, action => ({
                    name: `${action} ${curr}`,
                    action,
                    module: curr,
                    ruleCode: `${action}-${curr}`,
                    description: "",
                }));
                return [...prev, ...temp];
            },
            [],
        );

        return seedRuleValues as UserRule[];
    }

    public async init(): Promise<void> {
        console.log("run seed UserRuleSeed");
        this.loadData().forEach(async rule => {
            const ruleExists = await this.userRuleRepository.getRuleByRuleCode(rule.ruleCode);
            if (!ruleExists) {
                try {
                    console.log("ruleCode created:", rule.ruleCode);
                    this.userRuleRepository.create(rule);
                } catch (e) {
                    console.log("ruleCode not created error:", rule.ruleCode, e.message);
                }
            } else {
                console.log("ruleCode already exists:", rule.ruleCode);
            }
        });
    }
}
