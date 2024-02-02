import { RepositoryBaseInterface } from "@api/base/interface/repository-base-interface";
import { RepositoryBase } from "@api/base/repository-base";
import { Repository } from "typeorm";
import { ProductGroupRepositoryInterface } from "./interface/product-group-repository-interface";
import { ProductGroup } from "./product-group-entity";

export class ProductGroupRepository extends RepositoryBase<ProductGroup> implements ProductGroupRepositoryInterface {
    constructor() {
        super(ProductGroup);
    }
}
