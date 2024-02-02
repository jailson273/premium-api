import { asClass } from "awilix";
import { AuditRepository } from "./audit-repostory";
import { AuditService } from "./audit-service";

export default {
    auditService: asClass(AuditService).singleton(),
    auditRepository: asClass(AuditRepository).singleton(),
};
