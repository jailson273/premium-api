import { EntityTarget, getConnection, Repository } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { RepositoryBaseInterface } from "./interface/repository-base-interface";

export class RepositoryBase<T> implements RepositoryBaseInterface<T> {
    protected db: Repository<T>;

    constructor(entity: EntityTarget<T>) {
        this.db = getConnection().getRepository<T>(entity);
    }

    async create(data: T): Promise<T> {
        return this.db.save(this.db.create(data));
    }

    async getAll(): Promise<T[]> {
        return this.db.find();
    }

    async getById(id: number): Promise<T> {
        return this.db.findOne(id);
    }

    async update(id: number, data: T): Promise<T> {
        await this.db.update(id, data);
        return this.db.findOne(id);
    }

    async delete(id: number): Promise<boolean> {
        await this.db.update(id, <QueryDeepPartialEntity<{}>>{ active: false });
        return true;
    }
}
