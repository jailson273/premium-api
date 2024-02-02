import fs from "fs";
import path from "path";
import { LogServiceInterface, ResponseLog } from "./interface/log-service-interface";
import { Log } from "./log-entity";
import { ErrorUtil } from "@util/error";

export class LogService implements LogServiceInterface {
    async getLogByDate(date: string): Promise<ResponseLog> {
        if (!Number(date) || (Number(date) && date.length !== 8)) {
            throw new ErrorUtil.PropertyValueInvalidError("Date format is not the same as 'YYYYMMDD'", { date });
        }

        const logFileName = `${date}-application.log`;

        const pathLog = path.resolve(__dirname, "..", "..", "..", "logs", logFileName);

        if (!fs.existsSync(pathLog)) {
            throw new ErrorUtil.DomainNotFoundError("Log record not found for this date", { date });
        }

        const content: Log[] = fs
            .readFileSync(pathLog, {
                encoding: "utf-8",
            })
            .split(/(\n|\r)/)
            .reduce((prev, curr) => {
                if (!["\n", "\r", ""].includes(curr)) {
                    const { metadata, level, message, timestamp }: Log = JSON.parse(curr);
                    return [
                        { timestamp, level: level ?? "", message: message ?? "", metadata: metadata ?? {} },
                        ...prev,
                    ];
                }
                return prev;
            }, []);

        return {
            logFile: logFileName,
            items: content,
        };
    }
}
