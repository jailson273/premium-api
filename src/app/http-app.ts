import "reflect-metadata";
import express from "express";
import { loadControllers, scopePerRequest } from "awilix-express";
import container from "@container";
import apiApp from "@app/api-app";
process.env.TZ = "America/Sao_Paulo";

const app = express();

const httpApp = async function () {
    app.use(scopePerRequest(container));
    apiApp(app, loadControllers);

    return app;
};

export default httpApp;
