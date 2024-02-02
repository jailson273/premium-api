import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { GeneralConfiguration } from "./general-configuration.entity";

@route("general-configuration")
export class GeneralConfigurationController extends ControllerBase<GeneralConfiguration> {
    constructor({ generalconfigurationService }) {
        super(generalconfigurationService);
    }
}
