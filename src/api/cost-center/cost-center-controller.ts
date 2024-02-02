import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { CostCenter } from "./cost-center-entity";

@route("cost-center")
export class CostCenterController extends ControllerBase<CostCenter> {
    constructor({ costCenterService }) {
        super(costCenterService);
    }
}
