import { Audit } from "../audit-entity";

export interface AuditServiceInterface {
    save(audit: Audit): Promise<void>;
}
