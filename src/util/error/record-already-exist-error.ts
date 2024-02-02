import { HttpStatusCode } from "@util/enum/http-status-code-enum";
import { ErrorBase } from "./error-base";

export class RecordAlreadyExistError extends ErrorBase {
    constructor(message: string, content?: any) {
        super(message, "RecordAlreadyExistError", HttpStatusCode.BadRequest, content);
    }
}
