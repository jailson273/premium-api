import { ServiceBase } from "@api/base/service-base";
import { FixedAccount } from "./fixed-account-entity";
import { FixedAccountServiceInterface } from "./interface/fixed-account-service-interface";

export class FixedAccountService extends ServiceBase<FixedAccount> implements FixedAccountServiceInterface {
    constructor(fixedAccountRepository) {
        super(fixedAccountRepository);
    }
}
