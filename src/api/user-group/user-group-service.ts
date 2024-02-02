import { ServiceBase } from "@api/base/service-base";
import { ErrorUtil } from "@util/error";
import _ from "lodash";
import { UserGroupRepositoryInterface } from "./interface/user-group-repository-interface";
import { UserGroupServiceInterface } from "./interface/user-group-service-interface";
import { UserGroup } from "./user-group-entity";

export class UserGroupService extends ServiceBase<UserGroup> implements UserGroupServiceInterface {
    private userGroupRepository: UserGroupRepositoryInterface;

    constructor({ userGroupRepository }) {
        super(userGroupRepository);
        this.userGroupRepository = userGroupRepository;
    }

    async create(userGroup: UserGroup): Promise<UserGroup> {
        const userGroupExist = await this.userGroupRepository.getByName(userGroup.name);
        if (userGroupExist) {
            throw new ErrorUtil.RecordAlreadyExistError("There is already a group with this name", {
                userGroup: userGroupExist,
            });
        }

        return this.userGroupRepository.create(userGroup);
    }

    async addRule(userGroupId: number, ruleCodes: string[]): Promise<UserGroup> {
        const userGroup = await this.userGroupRepository.getRules(userGroupId);
        const rules: any[] = userGroup.userRules;
        const addRulesValues = _.difference(_.uniq(ruleCodes), rules);
        if (addRulesValues.length < 1) {
            throw new ErrorUtil.RecordAlreadyExistError("This Rule is already assigned to this group", { userGroup });
        }
        return this.userGroupRepository.addRule(userGroupId, addRulesValues);
    }

    async removeRules(userGroupId: number, ruleCodes: string[]): Promise<UserGroup> {
        return this.userGroupRepository.removeRules(userGroupId, ruleCodes);
    }
}
