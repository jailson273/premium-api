import { RepositoryBase } from "@api/base/repository-base";
import { PhoneReferenceEnum } from "../enum/phone-reference-enum";
import { Phone } from "../phone-entity";

export interface PhoneRepositoryInterface extends RepositoryBase<Phone> {
    getByReferenceId(reference: PhoneReferenceEnum, referenceId: number): Promise<Phone[]>;
}
