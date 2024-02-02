import { EntityBase } from "@api/base/entity-base";
import { Column, Entity } from "typeorm";
import { AuditAction } from "./enum/audit-action-enum";
import { AuditModule } from "./enum/audit-module-enum";

@Entity()
export class Audit extends EntityBase {
    @Column({ type: "varchar" })
    module: AuditModule;

    @Column({ type: "varchar" })
    action: AuditAction;

    @Column({ type: "varchar" })
    referenceId: string;

    @Column({ type: "json" })
    user: JSON;

    @Column({ type: "json" })
    oldValue?: JSON;

    @Column({ type: "json" })
    newValue?: JSON;
}
