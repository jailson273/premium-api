import fs from "fs";
import path from "path";
import { asClass, createContainer } from "awilix";

import { Logger } from "@util/logger";
import { Notification } from "@util/notification/notification";
import { EmailExternalService } from "@external/email/email-external-service";

const __pathContainerFile = (file: string) => path.resolve(__dirname, "api", file, `${file}-container.js`);
const __require = (path: string) => require(path).default;

/* Load containers from API */
const definition = fs
    .readdirSync(path.resolve(__dirname, "api"))
    .filter(file => fs.existsSync(__pathContainerFile(file)))
    .map(path => __require(__pathContainerFile(path)))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});

Object.assign(definition, {
    /* Load specific modules */
    logger: asClass(Logger).singleton(),
    notification: asClass(Notification).singleton(),
    emailExternalService: asClass(EmailExternalService).singleton(),
});

const container = createContainer().register(definition);
export default container;
