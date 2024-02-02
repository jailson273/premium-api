import { RepositoryBase } from "@api/base/repository-base";
import { FormOfPayment } from "./form-of-payment-entity";
import { FormOfPaymentRepositoryInterface } from "./interface/form-of-payment-repository-interface";

export class FormOfPaymentRepository extends RepositoryBase<FormOfPayment> implements FormOfPaymentRepositoryInterface {
    constructor() {
        super(FormOfPayment);
    }
}
