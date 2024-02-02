import { BusinessError } from "./business-error";
import { ContentInvalidError } from "./content-invalid-error";
import { DomainNotFoundError } from "./domain-not-found-error";
import { PropertyRequiredError } from "./property-required-error";
import { PropertyValueInvalidError } from "./property-value-invalid-error";
import { InternalServerError } from "./internal-server-error";
import { ForbiddenError } from "./forbidden-error";
import { UnauthorizedError } from "./unauthorized-error";
import { RecordAlreadyExistError } from "./record-already-exist-error";

export const ErrorUtil = {
    BusinessError: BusinessError,
    ContentInvalidError: ContentInvalidError,
    DomainNotFoundError: DomainNotFoundError,
    PropertyRequiredError: PropertyRequiredError,
    PropertyValueInvalidError: PropertyValueInvalidError,
    InternalServerError: InternalServerError,
    UnauthorizedError: UnauthorizedError,
    ForbiddenError: ForbiddenError,
    RecordAlreadyExistError: RecordAlreadyExistError,
};
