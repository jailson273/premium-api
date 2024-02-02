import { RepositoryBase } from "@api/base/repository-base";
import { Address } from "../address-entity";
import { AddressReferenceEnum } from "../enum/address-reference-enum";

export interface AddressRepositoryInterface extends RepositoryBase<Address> {
    getByReferenceId(reference: AddressReferenceEnum, referenceId: number): Promise<Address[]>;
}
