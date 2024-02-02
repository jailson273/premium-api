import { RepositoryBase } from "@api/base/repository-base";
import { Address } from "./address-entity";
import { AddressReferenceEnum } from "@api/address/enum/address-reference-enum";
import { AddressRepositoryInterface } from "./interface/address-repository-interface";

export class AddressRepository extends RepositoryBase<Address> implements AddressRepositoryInterface {
    constructor() {
        super(Address);
    }

    async getByReferenceId(reference: AddressReferenceEnum, referenceId: number): Promise<Address[]> {
        return this.db.find({ where: { [reference]: referenceId } });
    }
}
