import { HttpStatusCode } from "@util/enum/http-status-code-enum";
import { ErrorBase } from "./error-base";

export class DomainNotFoundError extends ErrorBase {
    constructor(message: string, content?: any) {
        super(message, "DomainNotFoundError", HttpStatusCode.NotFound, content);
    }
}
