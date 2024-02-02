import { HttpStatusCode } from "@util/enum/http-status-code-enum";
import { ErrorBase } from "./error-base";

export class BusinessError extends ErrorBase {
    constructor(message: string, content?: any) {
        super(message, "BusinessError", HttpStatusCode.UnprocessableEntity, content);
    }
}
