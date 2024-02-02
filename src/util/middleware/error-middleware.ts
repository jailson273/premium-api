import { Request, Response } from "express";
import { ErrorBase } from "@util/error/error-base";
import { ErrorUtil } from "@util/error";
import container from "@container";
import { Logger } from "@util/logger";

const logger: Logger = container.resolve("logger");

export function errorHandler(error: ErrorBase, request: Request, response, _) {
    logger.error(error.message, { error: error.stack });

    for (const e in ErrorUtil) {
        if (error instanceof ErrorUtil[e]) {
            return response.status(error.errorCode).send(error);
        }
    }
    const internalError = new ErrorUtil.InternalServerError("There was an internal error on the server", error.message);
    return response.status(internalError.errorCode).send(internalError);
}

export function errorHandlerApiRouteNotFound(request: Request, response: Response, _) {
    const routNotFound = new ErrorUtil.DomainNotFoundError("endpoint not implemented");
    logger.error(routNotFound.errorMessage, routNotFound);
    return response.status(routNotFound.errorCode).send(routNotFound);
}
