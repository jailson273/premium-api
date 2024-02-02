import jwt from "jsonwebtoken";
import appConfig from "@app-config";
import { ErrorUtil } from "./error";

export class Token {
    static sign(payload: Object = {}) {
        const token = jwt.sign(payload, appConfig.secret, { expiresIn: `${appConfig.expireInSession}ms` });
        const expireIn = Date.now() + Number(appConfig.expireInSession);
        return { accessToken: token, expireIn };
    }

    static verify<T = {}>(accessToken: string): T {
        try {
            const data = jwt.verify(accessToken, appConfig.secret);
            return data as T;
        } catch (e) {
            const message = e?.message?.includes("expired") ? "Expired token" : "Invalid Token";
            throw new ErrorUtil.UnauthorizedError(message);
        }
    }
}
