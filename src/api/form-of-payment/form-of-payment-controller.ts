import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { FormOfPayment } from "./form-of-payment-entity";

@route("/form-of-payment")
export class FormOfPaymentController extends ControllerBase<FormOfPayment> {
    constructor({ formOfPaymentService }) {
        super(formOfPaymentService);
    }
}
