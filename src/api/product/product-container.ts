import { asClass } from "awilix";
import { ProductRepository } from "./product-repository";
import { ProductService } from "./product-service";

export default {
    productService: asClass(ProductService).singleton(),
    productRepository: asClass(ProductRepository).singleton(),
};
