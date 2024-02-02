import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { Company } from "./company-entity";

@route("/company")
export class CompanyController extends ControllerBase<Company> {
    constructor({ companyService }) {
        super(companyService);
    }
}
