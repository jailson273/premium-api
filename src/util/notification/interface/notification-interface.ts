export interface NotificationInterface {
    subscribe(topic: any, callback: (message: any, data?: any) => void): void;
    publish(topic: any, data?: any): void;
}
