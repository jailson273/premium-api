import { RepositoryBase } from "@api/base/repository-base";
import { FixedAccount } from "./fixed-account-entity";
import { FixedAccountRepositoryInterface } from "./interface/fixed-account-repository-interface";

export class FixedAccountRepository extends RepositoryBase<FixedAccount> implements FixedAccountRepositoryInterface {
    constructor() {
        super(FixedAccount);
    }
}
