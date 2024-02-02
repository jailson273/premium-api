import { Log } from "../log-entity";

export interface ResponseLog {
    logFile: string;
    items: Log[];
}
export interface LogServiceInterface {
    /**
     * @param {string} date YYYYMMDD
     */
    getLogByDate(date: string): Promise<ResponseLog>;
}
