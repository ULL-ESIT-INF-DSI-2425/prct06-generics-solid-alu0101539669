interface NotificationService {
    notify(message: string): void;
}
declare class EmailService implements NotificationService {
    notify(message: string): void;
}
declare class ShortMessageService implements NotificationService {
    notify(message: string): void;
}
declare class Notifier {
    private notificationService;
    constructor(notificationService: NotificationService);
    sendNotification(message: string): void;
}
declare const emailNotifier: Notifier;
declare const shortMessageNotifier: Notifier;
