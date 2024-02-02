import { asClass } from "awilix";
import { ProductGroupRepository } from "./product-group-repository";
import { ProductGroupService } from "./product-group-service";

export default {
    productGroupService: asClass(ProductGroupService).singleton(),
    productGroupRepository: asClass(ProductGroupRepository).singleton(),
};
