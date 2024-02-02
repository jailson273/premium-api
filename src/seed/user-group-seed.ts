import _ from "lodash";
import container from "@container";
import { ErrorUtil } from "@util/error";
import { UserGroupRepositoryInterface } from "@api/user-group/interface/user-group-repository-interface";
import { UserRuleRepositoryInterface } from "@api/user-rule/interface/user-rule-repository-interface";

export default class UserGroupSeed {
    private userGroupRepository: UserGroupRepositoryInterface;
    private userRuleRepository: UserRuleRepositoryInterface;
    constructor() {
        this.userGroupRepository = container.resolve("userGroupRepository");
        this.userRuleRepository = container.resolve("userRuleRepository");
    }

    private async addRules(userGroupId: number, ruleCodes: string[]): Promise<void> {
        try {
            await this.userGroupRepository.addRule(userGroupId, ruleCodes);
            console.log("Rules added in UserGroup id", userGroupId);
        } catch (error) {
            if (error instanceof ErrorUtil.RecordAlreadyExistError) {
                console.log("Rules already added to UserGroup id", userGroupId);
            }
        }
    }

    public async init(): Promise<void> {
        console.log("run seed UserGroupSeed");
        const groups = await this.userGroupRepository.getAll();
        const names = _.map(groups, group => group.name);

        console.log("names", names);

        const rules = await this.userRuleRepository.getAll();
        const ruleCodes = rules.map(rule => rule.ruleCode);

        ["Admin"].forEach(async curr => {
            if (!names.includes(curr)) {
                try {
                    const userGroup = await this.userGroupRepository.create({ name: curr });
                    console.log("UserGroup", curr, "created, id", userGroup.id);
                    this.addRules(userGroup.id, ruleCodes);
                } catch (error) {
                    if (error instanceof ErrorUtil.RecordAlreadyExistError) {
                        this.addRules(error.errorContent.userGroup.id, ruleCodes);
                    } else {
                        console.log("error in create UserGroup", error.message);
                    }
                }
            }
        });
    }
}
