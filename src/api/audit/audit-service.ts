import { Audit } from "./audit-entity";
import { AuditRepositoryInterface } from "./interface/audit-repository-interface";
import { AuditServiceInterface } from "./interface/audit-service-interface";

export class AuditService implements AuditServiceInterface {
    private auditRepository: AuditRepositoryInterface;
    constructor({ auditRepository }) {
        this.auditRepository = auditRepository;
    }

    async save(audit: Audit): Promise<void> {
        await this.auditRepository.save(audit);
    }
}
