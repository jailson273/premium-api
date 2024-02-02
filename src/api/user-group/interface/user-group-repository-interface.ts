import { RepositoryBase } from "@api/base/repository-base";
import { UserGroup } from "../user-group-entity";

export interface UserGroupRepositoryInterface extends RepositoryBase<UserGroup> {
    getByName(name: string): Promise<UserGroup>;
    addRule(userGroupId: number, ruleCodes: string[]): Promise<UserGroup>;
    getRules(userGroupId: number): Promise<UserGroup>;
    removeRules(userGroupId: number, ruleCodes: string[]): Promise<UserGroup>;
}
