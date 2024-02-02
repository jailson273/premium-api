import { RepositoryBase } from "@api/base/repository-base";
import { PhoneReferenceEnum } from "./enum/phone-reference-enum";
import { PhoneRepositoryInterface } from "./interface/phone-repository-interface";
import { Phone } from "./phone-entity";

export class PhoneRepository extends RepositoryBase<Phone> implements PhoneRepositoryInterface {
    constructor() {
        super(Phone);
    }
    async getByReferenceId(reference: PhoneReferenceEnum, referenceId: number): Promise<Phone[]> {
        return this.db.find({ where: { [reference]: referenceId } });
    }
}
