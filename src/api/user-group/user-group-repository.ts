import { RepositoryBase } from "@api/base/repository-base";
import { UserGroupRepositoryInterface } from "./interface/user-group-repository-interface";
import { UserGroup } from "./user-group-entity";

export class UserGroupRepository extends RepositoryBase<UserGroup> implements UserGroupRepositoryInterface {
    constructor() {
        super(UserGroup);
    }

    async getByName(name: string): Promise<UserGroup> {
        return this.db.findOne({
            where: { name },
        });
    }

    async getAll(): Promise<UserGroup[]> {
        return this.db.find({
            loadRelationIds: {
                relations: ["userRules"],
            },
            select: ["id", "name", "active"],
        });
    }

    async getById(id: number): Promise<UserGroup> {
        return this.db.findOne(id, {
            relations: ["userRules"],
        });
    }

    async getRules(userGroupId: number): Promise<UserGroup> {
        return this.db.findOne(userGroupId, {
            loadRelationIds: {
                relations: ["userRules"],
            },
            select: ["id", "name", "active"],
        });
    }

    async addRule(userGroupId: number, ruleCodes: string[]): Promise<UserGroup> {
        const tertiaryTable = "user_group_rule";
        const values = ruleCodes.map(ruleCode => ({ userGroupId, ruleCode }));
        await this.db
            .createQueryBuilder()
            .insert()
            .into(tertiaryTable, ["userGroupId", "ruleCode"])
            .values(values)
            .execute();

        const userGroup = await this.db.findOne(userGroupId, {
            loadRelationIds: {
                relations: ["userRules"],
            },
        });

        return userGroup;
    }

    async removeRules(userGroupId: number, ruleCodes: string[]): Promise<UserGroup> {
        const tertiaryTable = "user_group_rule";
        await this.db
            .createQueryBuilder()
            .delete()
            .from(tertiaryTable)
            .where("userGroupId = :userGroupId", { userGroupId })
            .andWhere("ruleCode in (:...ruleCodes)", { ruleCodes })
            .execute();

        const userGroup = await this.db.findOne(userGroupId, {
            loadRelationIds: {
                relations: ["userRules"],
            },
        });

        return userGroup;
    }
}
