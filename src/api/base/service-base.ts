import { Audit } from "@api/audit/audit-entity";
import { AuditServiceInterface } from "@api/audit/interface/audit-service-interface";
import container from "@container";
import { ErrorUtil } from "@util/error";
import { RepositoryBaseInterface } from "./interface/repository-base-interface";
import { ServiceBaseInterface } from "./interface/service-base-interface";

export class ServiceBase<T> implements ServiceBaseInterface<T> {
    protected repository: RepositoryBaseInterface<T>;
    protected auditService: AuditServiceInterface;

    constructor(repository) {
        this.repository = repository;
        this.auditService = container.resolve("auditService");
    }

    async create(data: T): Promise<T> {
        return this.repository.create(data);
    }

    async getAll(): Promise<T[]> {
        return this.repository.getAll();
    }

    async getById(id: number): Promise<T> {
        const data = await this.repository.getById(id);
        if (!data) {
            throw new ErrorUtil.DomainNotFoundError("No data found");
        }
        return data;
    }

    async update(id: number, data: T): Promise<T> {
        await this.getById(id);
        return await this.repository.update(id, data);
    }

    async delete(id: number): Promise<boolean> {
        await this.getById(id);
        return this.repository.delete(id);
    }

    protected async saveAudit(audit: Audit): Promise<boolean> {
        await this.auditService.save(audit);
        return true;
    }
}
