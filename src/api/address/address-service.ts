import { ServiceBase } from "@api/base/service-base";
import { Address } from "./address-entity";
import { AddressServiceInterface } from "./interface/address-service-interface";

export class AddressService extends ServiceBase<Address> implements AddressServiceInterface {
    constructor({ addressRepository }) {
        super(addressRepository);
    }
}
