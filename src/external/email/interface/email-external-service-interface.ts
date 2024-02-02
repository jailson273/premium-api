import { EmailOptions } from "../email-options";
import { EmailResponse } from "../email-response";
export interface EmailExternalServiceInterface {
    send(options: EmailOptions): Promise<EmailResponse>;
}
