import { RepositoryBase } from "@api/base/repository-base";
import { GeneralConfiguration } from "./general-configuration.entity";
import { GeneralConfigurationRepositoryInterface } from "./interface/general-configuration-repository-interface";

export class GeneralConfigurationrRepository
    extends RepositoryBase<GeneralConfiguration>
    implements GeneralConfigurationRepositoryInterface
{
    constructor() {
        super(GeneralConfiguration);
    }
}
