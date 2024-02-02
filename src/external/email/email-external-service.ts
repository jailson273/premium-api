import nodemailer from "nodemailer";
import { EmailOptions } from "./email-options";
import { EmailResponse } from "./email-response";
import { EmailExternalServiceInterface } from "./interface/email-external-service-interface";
import appConfig from "@app-config";

export class EmailExternalService implements EmailExternalServiceInterface {
    private transporter: nodemailer.Transporter;
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: appConfig.emailService,
            auth: {
                user: appConfig.emailGmailUser,
                pass: appConfig.emailGmailPass,
            },
        });
    }

    send(options: EmailOptions): Promise<EmailResponse> {
        return new Promise((resolve, reject) => {
            this.transporter.sendMail({ cc: options.copy, ...options }, function (err, info) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ messageId: info.messageId });
                }
            });
        });
    }
}
