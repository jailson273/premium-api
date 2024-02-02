import express, { Application } from "express";
import handlebars from "express-handlebars";
import helmet from "helmet";
import cors from "cors";
import { errorHandler } from "@util/middleware/error-middleware";
import { errorHandlerApiRouteNotFound } from "@util/middleware/error-middleware";
import { logMiddleware } from "@util/middleware/log-middleware";
import { checkAuth, checkRule } from "@util/middleware/auth-middleware";
import path from "path";

export default function (app: Application, loadControllers) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.engine(".hbs", handlebars({ extname: ".hbs" }));
    app.use("/public/assets", express.static(path.resolve(__dirname, "../../public/assets")));
    app.set("view engine", ".hbs");
    app.set("views", path.resolve(__dirname, "../../public/views"));
    app.use("/api", helmet());
    app.use("/api", cors());
    app.use("/api", logMiddleware);
    app.use("/api", checkAuth);
    app.use("/api", checkRule);
    app.use("/api", loadControllers("./../api/**/*-controller.js", { cwd: __dirname }));
    app.use("/api", errorHandler);
    app.use("/api", errorHandlerApiRouteNotFound);
}
