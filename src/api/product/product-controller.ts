import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { Product } from "./product-entity";

@route("/product")
export class ProductController extends ControllerBase<Product> {
    constructor({ productService }) {
        super(productService);
    }
}
