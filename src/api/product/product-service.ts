import { ServiceBase } from "@api/base/service-base";
import { ProductServiceInterface } from "./interface/product-service-interface";
import { Product } from "./product-entity";

export class ProductService extends ServiceBase<Product> implements ProductServiceInterface {
    constructor({ productRepository }) {
        super(productRepository);
    }
}
