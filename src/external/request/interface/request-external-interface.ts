import { ResponseData } from "../request-entity";

export interface RequestExternalInterface {
    post(url: string, body?: any, headers?: Object): Promise<ResponseData>;
}
