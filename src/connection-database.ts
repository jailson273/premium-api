import { createConnection } from "typeorm";
import container from "@container";
import { LoggerInterface } from "@util/interface/logger-interface";

const logger: LoggerInterface = container.resolve("logger");

const connectionDatabase = async () => {
    await createConnection()
        .then(_ => logger.info("connection created in database"))
        .catch(err => {
            logger.error("connection database failed error", { error: err.stack });
            process.exit();
        });
};

export default connectionDatabase;
