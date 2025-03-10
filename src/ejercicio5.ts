// Ejercicio 5 - Servicio de mensajería
// Teniendo en cuenta el código fuente propuesto más abajo, indique si se está violando alguno de los principios SOLID y justifique su respuesta. En tal caso, ¿podría proporcionar un mejor diseño e implementación que sí que cumpla con dichos principios?

// // Class that allows notifications by email to be sent
// class EmailService {
//   notify(message: string): void {
//     console.log(`Sending notification by email: ${message}`);
//   }
// }

// // Class that allows notifications by SMS to be sent
// class ShortMessageService {
//   notify(message: string): void {
//     console.log(`Sending notification by SMS: ${message}`);
//   }
// }

// // Class that makes use of different types of services to perform notifications
// class Notifier {
//   constructor(private notificationService: EmailService | ShortMessageService) {
//   }

//   sendNotification(message: string): void {
//     this.notificationService.notify(message);
//   }
// }

// // Client code
// const emailNotifier = new Notifier(new EmailService());
// emailNotifier.sendNotification('Hello World!');

// const shortMessageNotifier = new Notifier(new ShortMessageService());
// shortMessageNotifier.sendNotification('Hello World!');

// Este código viola el principio de inversión de dependencias (DIP) porque la clase Notifier depende directamente de las implementaciones concretas de EmailService y ShortMessageService. Para cumplir con DIP, la clase Notifier debe depender de una abstracción en lugar de las implementaciones concretas.

// A continuación se muestra una posible solución que cumple con DIP:

// Abstracción para los servicios de notificación
interface NotificationService {
    notify(message: string): void;
  }
  
  // Implementación concreta para correo electrónico
  class EmailService implements NotificationService {
    notify(message: string): void {
      console.log(`Sending notification by email: ${message}`);
    }
  }
  
  // Implementación concreta para SMS
  class ShortMessageService implements NotificationService {
    notify(message: string): void {
      console.log(`Sending notification by SMS: ${message}`);
    }
  }
  
  // Clase Notifier que depende de la abstracción NotificationService
  class Notifier {
    constructor(private notificationService: NotificationService) {}
  
    sendNotification(message: string): void {
      this.notificationService.notify(message);
    }
  }
  
  // Client code
  const emailNotifier = new Notifier(new EmailService());
  emailNotifier.sendNotification('Hello World!');
  
  const shortMessageNotifier = new Notifier(new ShortMessageService());
  shortMessageNotifier.sendNotification('Hello World!');
  