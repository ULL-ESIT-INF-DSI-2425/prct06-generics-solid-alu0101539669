// Ejercicio 5 - Servicio de mensajería
// Teniendo en cuenta el código fuente propuesto más abajo, indique si se está violando alguno de los principios SOLID y justifique su respuesta. En tal caso, ¿podría proporcionar un mejor diseño e implementación que sí que cumpla con dichos principios?
// Implementación concreta para correo electrónico
class EmailService {
    notify(message) {
        console.log(`Sending notification by email: ${message}`);
    }
}
// Implementación concreta para SMS
class ShortMessageService {
    notify(message) {
        console.log(`Sending notification by SMS: ${message}`);
    }
}
// Clase Notifier que depende de la abstracción NotificationService
class Notifier {
    notificationService;
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    sendNotification(message) {
        this.notificationService.notify(message);
    }
}
// Client code
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');
const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');
