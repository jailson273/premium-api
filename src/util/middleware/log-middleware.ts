import { NextFunction, Request, Response } from "express";
import container from "@container";
import { Logger } from "@util/logger";
import { noLogAPI } from "@util/constant/white-list";

const logger: Logger = container.resolve("logger");

export function logMiddleware(request: Request, _: Response, next: NextFunction) {
    try {
        if (!noLogAPI.includes(request.path)) {
            return next();
        }
        const { method, hostname, path, body, headers, params, query } = request;
        logger.info("api request log", {
            method: method,
            host: hostname,
            path: path,
            body: body,
            headers: headers,
            params: params,
            query: query,
        });
    } catch {}
    next();
}
