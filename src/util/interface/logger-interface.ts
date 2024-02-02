export interface LoggerInterface {
    debug(message: string): void;
    info(message: string, metadata?: Object | any[]): void;
    warn(message: string, metadata?: Object | any[]): void;
    error(message: string, metadata?: Object | any[]): void;
}
