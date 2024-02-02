import { asClass } from "awilix";
import { FormOfPaymentRepository } from "./form-of-payment-repository";
import { FormOfPaymentService } from "./form-of-payment-service";

export default {
    formOfPaymentService: asClass(FormOfPaymentService).singleton(),
    formOfPayment: asClass(FormOfPaymentRepository).singleton(),
};
