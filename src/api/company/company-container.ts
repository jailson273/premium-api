import { asClass } from "awilix";
import { CompanyRepository } from "./company-repository";
import { CompanyService } from "./company-service";

export default {
    companyService: asClass(CompanyService).singleton(),
    companyRepository: asClass(CompanyRepository).singleton(),
};
