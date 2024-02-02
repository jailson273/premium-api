import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { Provider } from "./provider-entity";

@route("/provider")
export class ProviderController extends ControllerBase<Provider> {
    constructor({ providerService }) {
        super(providerService);
    }
}
