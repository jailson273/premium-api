import { ServiceBase } from "@api/base/service-base";
import { GeneralConfiguration } from "./general-configuration.entity";
import { GeneralConfigurationServiceInterface } from "./interface/general-configuration-service-interface";

export class GeneralConfigurationService
    extends ServiceBase<GeneralConfiguration>
    implements GeneralConfigurationServiceInterface
{
    constructor({ generalconfigurationRepository }) {
        super(generalconfigurationRepository);
    }
}
