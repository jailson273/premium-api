import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { Address } from "./address-entity";

@route("/address")
export class AddressController extends ControllerBase<Address> {
    constructor({ addressService }) {
        super(addressService);
    }
}
