import { asClass } from "awilix";
import { LogService } from "./log-service";

export default {
    logService: asClass(LogService).singleton(),
};
