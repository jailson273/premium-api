import { HttpStatusCode } from "@util/enum/http-status-code-enum";
import { ErrorBase } from "./error-base";

export class PropertyRequiredError extends ErrorBase {
    constructor(message: string, content?: any) {
        super(message, "PropertyRequiredError", HttpStatusCode.BadRequest, content);
    }
}
