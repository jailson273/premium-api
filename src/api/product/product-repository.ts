import { RepositoryBase } from "@api/base/repository-base";
import { ProductRepositoryInterface } from "@api/product/interface/product-repository-interface";
import { Product } from "./product-entity";
export class ProductRepository extends RepositoryBase<Product> implements ProductRepositoryInterface {
    constructor() {
        super(Product);
    }
}
