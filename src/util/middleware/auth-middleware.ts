import { ErrorUtil } from "@util/error";
import { Token } from "@util/token";
import { NextFunction, Request, Response } from "express";
import { AuthServiceInterface } from "@api/auth/interface/auth-service-interface";
import container from "@container";
import { httpMethodToAction } from "@util/constant/http-method-to-action";
import { noCheckAuthAndRule } from "@util/constant/white-list";
interface TokenPayload {
    userId: string | number;
    userEmail: string;
    userCode: string;
    iat: number;
    exp: number;
}

function pathToModule(path: string) {
    const module = path.split("/").filter(p => !["api", ""].includes(p))[0];
    return module;
}

export async function checkAuth(request: Request, response: Response, next: NextFunction) {
    if (noCheckAuthAndRule.includes(pathToModule(request.path))) {
        return next();
    }

    const accessToken = request.headers["authorization"] as string;

    if (!accessToken) {
        const unauthorizedError = new ErrorUtil.UnauthorizedError("This feature needs authentication", {
            header: { authorization: "" },
        });
        return response.status(unauthorizedError.errorCode).send(unauthorizedError);
    }

    try {
        const data = Token.verify<TokenPayload>(accessToken);
        request.user = {
            id: data.userId.toString(),
            email: data.userEmail,
            userCode: data.userCode,
        };
    } catch (e) {
        const unauthorizedError = new ErrorUtil.UnauthorizedError(e.message);
        return response.status(unauthorizedError.errorCode).send(unauthorizedError);
    }

    next();
}

export async function checkRule(request: Request, response: Response, next: NextFunction) {
    const module = pathToModule(request.path);

    if (noCheckAuthAndRule.includes(module)) {
        return next();
    }

    const user = request.user;
    const action = httpMethodToAction[request.method.toUpperCase()];

    const ruleCode = `${action}-${module}`;

    const authorized = await (<AuthServiceInterface>container.resolve("authService")).verifyUserRule(
        Number(user.id),
        ruleCode,
    );

    if (!authorized) {
        const forbiddenError = new ErrorUtil.ForbiddenError("User without permission to access this feature", {
            authorized,
        });
        return response.status(forbiddenError.errorCode).send(forbiddenError);
    }

    next();
}
