import { HttpStatusCode } from "@util/enum/http-status-code-enum";
import { ErrorBase } from "./error-base";

export class ContentInvalidError extends ErrorBase {
    constructor(message: string, content?: any) {
        super(message, "ContentInvalidError", HttpStatusCode.BadRequest, content);
    }
}
