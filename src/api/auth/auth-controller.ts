import { HttpStatusCode } from "@util/enum/http-status-code-enum";
import { POST, route } from "awilix-express";
import { Request, Response } from "express";
import { Auth, LoginEmail, LoginUserCode } from "./auth-entity";
import { AuthServiceInterface } from "./interface/auth-service-interface";

@route("/auth")
export class AuthController {
    private authService: AuthServiceInterface;

    constructor({ authService }) {
        this.authService = authService;
    }

    @route("/login")
    @POST()
    async login(request: Request, response: Response): Promise<Auth | any> {
        const login = <LoginEmail | LoginUserCode>request.body;
        return response.status(HttpStatusCode.Ok).json(await this.authService.login(login));
    }
}
