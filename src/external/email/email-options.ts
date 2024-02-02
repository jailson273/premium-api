export interface EmailOptions {
    from: string;
    to: string[] | string;
    copy?: string[] | string;
    subject: string;
    html: string;
}
