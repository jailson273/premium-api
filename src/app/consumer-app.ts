import container from "@container";
import { ConsumerBase } from "@api/base/consumer-base";

export default async function consumerApp() {
    container.resolve<ConsumerBase>("userConsumer").subscribeToTopics();
}
