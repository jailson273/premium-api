import { RepositoryBase } from "@api/base/repository-base";
import { ProviderRepositoryInterface } from "./interface/provider-repository-interface";
import { Provider } from "./provider-entity";

export class ProviderRepository extends RepositoryBase<Provider> implements ProviderRepositoryInterface {
    constructor() {
        super(Provider);
    }
}
