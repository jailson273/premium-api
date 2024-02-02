import { asClass } from "awilix";
import { ProviderRepository } from "./provider-repository";
import { ProviderService } from "./provider-service";

export default {
    providerService: asClass(ProviderService).singleton(),
    providerRepository: asClass(ProviderRepository).singleton(),
};
