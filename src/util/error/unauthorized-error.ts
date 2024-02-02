import { HttpStatusCode } from "@util/enum/http-status-code-enum";
import { ErrorBase } from "./error-base";

export class UnauthorizedError extends ErrorBase {
    constructor(message: string, content?: any) {
        super(message, "Unauthorized", HttpStatusCode.Unauthorized, content);
    }
}
