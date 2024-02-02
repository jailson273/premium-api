import { GET, route } from "awilix-express";
import { format } from "date-fns";
import { HttpStatusCode } from "@util/enum/http-status-code-enum";
import { Request, Response } from "express-serve-static-core";
import { LogServiceInterface } from "./interface/log-service-interface";

@route("/log")
export class LogController {
    private logService: LogServiceInterface;

    constructor({ logService }) {
        this.logService = logService;
    }

    @GET()
    async getLog(request: Request, response: Response) {
        const date = <string>request.query?.date ?? format(Date.now(), "yyyyMMdd");
        const content = await this.logService.getLogByDate(date);
        return response.status(HttpStatusCode.Ok).send(content.items);
    }

    @GET()
    @route("/view")
    async view(request: Request, response: Response) {
        const date = <string>request.query?.date ?? format(Date.now(), "yyyyMMdd");
        let log = await this.logService.getLogByDate(date);
        log = {
            ...log,
            items: log.items.map(item => ({ ...item, metadata: JSON.stringify(item.metadata) })),
        };
        return response.render("log", { layout: false, log });
    }
}
