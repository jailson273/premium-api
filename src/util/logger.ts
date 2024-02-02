import path from "path";
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { LoggerInterface } from "@util/interface/logger-interface";

const combineFormat = [winston.format.json(), winston.format.timestamp({ alias: "timestamp" })];

export class Logger implements LoggerInterface {
    private logger: winston.Logger;

    constructor() {
        this.logger = winston.createLogger({
            format: winston.format.combine(...combineFormat),
            transports: [
                new winston.transports.Console(),
                new DailyRotateFile({
                    format: winston.format.combine(...combineFormat),
                    dirname: path.resolve(__dirname, "..", "..", "logs"),
                    filename: "%DATE%-application.log",
                    datePattern: "YYYYMMDD",
                }),
            ],
        });
    }

    debug(message: string) {
        this.logger.debug(message);
    }

    info(message, metadata?: Object | any[]) {
        metadata ? this.logger.info(message, { metadata }) : this.logger.info(message);
    }

    warn(message, metadata?: Object | any[]) {
        metadata ? this.logger.warn(message, { metadata }) : this.logger.warn(message);
    }

    error(message, metadata?: Object | any[]) {
        metadata ? this.logger.error(message, { metadata }) : this.logger.error(message);
    }
}
