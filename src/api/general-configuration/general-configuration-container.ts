import { asClass } from "awilix/lib/resolvers";
import { GeneralConfigurationrRepository } from "./general-configuration-repository";
import { GeneralConfigurationService } from "./general-configuration-service";

export default {
    generalConfigurationService: asClass(GeneralConfigurationService).singleton(),
    generalConfigurationRepository: asClass(GeneralConfigurationrRepository).singleton(),
};
