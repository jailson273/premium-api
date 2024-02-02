import { Request, Response } from "express";
import { POST, GET, PUT, DELETE, route } from "awilix-express";
import { ControllerBaseInterface } from "./interface/controller-base-interface";
import { ServiceBaseInterface } from "./interface/service-base-interface";
import { HttpStatusCode } from "@util/enum/http-status-code-enum";
export class ControllerBase<T> implements ControllerBaseInterface<T> {
    protected service: ServiceBaseInterface<T>;
    constructor(service) {
        this.service = service;
    }

    @POST()
    async create(request: Request, response: Response): Promise<T | any> {
        const b: T = request.body;
        const rule = await this.service.create(b);
        return response.status(HttpStatusCode.Created).json(rule);
    }

    @GET()
    async getAll(_: Request, response: Response): Promise<T[] | any> {
        const rules: T[] = await this.service.getAll();
        response.status(HttpStatusCode.Ok).json(rules);
    }

    @route("/:id")
    @GET()
    async getById(request: Request, response: Response): Promise<T | any> {
        const id = Number(request.params.id);
        const rule = await this.service.getById(id);
        response.status(HttpStatusCode.Ok).json(rule);
    }

    @route("/:id")
    @PUT()
    async update(request: Request, response: Response): Promise<T | any> {
        const id = Number(request.params.id);
        const b: T = request.body;
        const rule = await this.service.update(id, b);
        response.status(HttpStatusCode.Ok).json(rule);
    }

    @route("/:id")
    @DELETE()
    async delete(request: Request, response: Response): Promise<boolean | any> {
        const id = Number(request.params.id);
        const deleted = await this.service.delete(id);
        response.status(HttpStatusCode.Ok).json(deleted);
    }
}
