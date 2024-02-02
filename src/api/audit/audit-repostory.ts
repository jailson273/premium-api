import { getConnection, Repository } from "typeorm";
import { Audit } from "./audit-entity";
import { AuditRepositoryInterface } from "./interface/audit-repository-interface";

export class AuditRepository implements AuditRepositoryInterface {
    protected db: Repository<Audit>;

    constructor() {
        this.db = getConnection().getRepository<Audit>(Audit);
    }

    async save(audit: Audit): Promise<void> {
        const created = this.db.create(audit);
        await this.db.save(created);
    }
}
