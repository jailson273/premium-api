import { ServiceBase } from "@api/base/service-base";
import { ProviderServiceInterface } from "./interface/provider-service-interface";
import { Provider } from "./provider-entity";

export class ProviderService extends ServiceBase<Provider> implements ProviderServiceInterface {
    constructor({ providerRepository }) {
        super(providerRepository);
    }
}
