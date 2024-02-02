import { asClass } from "awilix";
import { PhoneRepository } from "./phone-repository";

export default {
    phoneRepository: asClass(PhoneRepository).singleton(),
};
