import { HttpStatusCode } from "@util/enum/http-status-code-enum";
import { ErrorBase } from "./error-base";

export class ForbiddenError extends ErrorBase {
    constructor(message: string, content?: any) {
        super(message, "Forbidden", HttpStatusCode.Forbidden, content);
    }
}
