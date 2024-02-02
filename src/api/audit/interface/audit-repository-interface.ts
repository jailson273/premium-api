import { Audit } from "../audit-entity";

export interface AuditRepositoryInterface {
    save(audit: Audit): Promise<void>;
}
