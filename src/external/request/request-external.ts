import axios from "axios";
import { RequestExternalInterface } from "./interface/request-external-interface";
import { ResponseData } from "./request-entity";

export class RequestExternal implements RequestExternalInterface {
    public async post(url: string, body?: any, headers?: Object): Promise<ResponseData> {
        try {
            const response = await axios.post(url, body, { headers });
            return {
                statusCode: response.status,
                content: response.data,
            };
        } catch (e) {
            if (e.response) {
                return {
                    statusCode: e.response.status,
                    content: e.response.data,
                };
            }
        }
    }
}
