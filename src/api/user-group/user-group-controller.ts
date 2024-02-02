import { ControllerBase } from "@api/base/controller-base";
import { HttpStatusCode } from "@util/enum/http-status-code-enum";
import { DELETE, POST, route } from "awilix-express";
import { Request, Response } from "express";
import { UserGroupServiceInterface } from "./interface/user-group-service-interface";
import { UserGroup } from "./user-group-entity";

@route("/user-group")
export class UserGroupController extends ControllerBase<UserGroup> {
    private userGroupService: UserGroupServiceInterface;
    constructor({ userGroupService }) {
        super(userGroupService);
        this.userGroupService = userGroupService;
    }

    @route("/:userGroupId/user-rule")
    @POST()
    async addRule(request: Request, response: Response): Promise<any> {
        const userGroupId = request.params.userGroupId;
        const ruleCodes = request.body.ruleCodes;
        const group = await this.userGroupService.addRule(Number(userGroupId), ruleCodes);
        return response.status(HttpStatusCode.Ok).send(group);
    }

    @route("/:userGroupId/user-rule")
    @DELETE()
    async removeRules(request: Request, response: Response): Promise<any> {
        const userGroupId = request.params.userGroupId;
        const ruleCodes = request.body.ruleCodes;
        console.log("controller", "userGroupId", userGroupId, "ruleCode", ruleCodes);
        const group = await this.userGroupService.removeRules(Number(userGroupId), ruleCodes);
        return response.status(HttpStatusCode.Ok).send(group);
    }
}
