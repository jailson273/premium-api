import { ServiceBase } from "@api/base/service-base";
import { UserGroup } from "../user-group-entity";

export interface UserGroupServiceInterface extends ServiceBase<UserGroup> {
    addRule(userGroupId: number, ruleCodes: string[]): Promise<UserGroup>;
    removeRules(userGroupId: number, ruleCodes: string[]): Promise<UserGroup>;
}
