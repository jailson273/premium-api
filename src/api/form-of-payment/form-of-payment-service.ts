import { ServiceBase } from "@api/base/service-base";
import { FormOfPayment } from "./form-of-payment-entity";
import { FormOfPaymentServiceInterface } from "./interface/form-of-payment-service-interface";

export class FormOfPaymentService extends ServiceBase<FormOfPayment> implements FormOfPaymentServiceInterface {
    constructor({ formOfPayment }) {
        super(formOfPayment);
    }
}
