import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { ProductGroup } from "./product-group-entity";

@route("/product-group")
export class ProductGroupController extends ControllerBase<ProductGroup> {
    constructor({ productGroupService }) {
        super(productGroupService);
    }
}
