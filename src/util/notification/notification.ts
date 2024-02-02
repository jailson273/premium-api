import PubSub from "pubsub-js";
import { NotificationInterface } from "./interface/notification-interface";

export class Notification implements NotificationInterface {
    subscribe(topic: any, callback: (message: any, data?: any) => void) {
        PubSub.subscribe(topic, callback);
    }

    publish(topic: any, data?: any) {
        PubSub.publish(topic, data);
    }
}
