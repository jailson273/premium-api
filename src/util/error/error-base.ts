export abstract class ErrorBase extends Error {
    public errorCode: number;
    public errorMessage: string;
    public errorContent: any;
    public errorName: string;

    constructor(message: string, name: string, code: number, content?: any) {
        super(message);
        this.errorName = name;
        this.errorCode = code;
        this.errorMessage = message;
        this.errorContent = content;
    }
}
