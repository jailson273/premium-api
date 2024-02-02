import { RepositoryBase } from "@api/base/repository-base";
import { Company } from "./company-entity";
import { CompanyRepositoryInterface } from "./interface/company-repository-interface";

export class CompanyRepository extends RepositoryBase<Company> implements CompanyRepositoryInterface {
    constructor() {
        super(Company);
    }
}
