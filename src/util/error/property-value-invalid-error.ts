import { HttpStatusCode } from "@util/enum/http-status-code-enum";
import { ErrorBase } from "./error-base";

export class PropertyValueInvalidError extends ErrorBase {
    constructor(message: string, content?: any) {
        super(message, "PropertyValueInvalidError", HttpStatusCode.BadRequest, content);
    }
}
