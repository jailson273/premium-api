import { ServiceBase } from "@api/base/service-base";
import { ProductGroupServiceInterface } from "./interface/product-group-service-interface";
import { ProductGroup } from "./product-group-entity";

export class ProductGroupService extends ServiceBase<ProductGroup> implements ProductGroupServiceInterface {
    constructor({ productGroupRepository }) {
        super(productGroupRepository);
    }
}
