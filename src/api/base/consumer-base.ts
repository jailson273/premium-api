import { ConsumerBaseInterface } from "./interface/consumer-base-interface";

export abstract class ConsumerBase implements ConsumerBaseInterface {
    abstract subscribeToTopics(): void;
}
