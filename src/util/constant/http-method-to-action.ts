import { RuleAction } from "@api/user-rule/enum/rule-action-enum";

export const httpMethodToAction = {
    GET: RuleAction.READ,
    POST: RuleAction.CREATE,
    DELETE: RuleAction.DELETE,
    PUT: RuleAction.UPDATE,
    PATCH: RuleAction.UPDATE,
};
