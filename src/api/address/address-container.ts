import { asClass } from "awilix";
import { AddressRepository } from "./address-repository";
import { AddressService } from "./address-service";

export default {
    addressService: asClass(AddressService).singleton(),
    addressRepository: asClass(AddressRepository).singleton(),
};
