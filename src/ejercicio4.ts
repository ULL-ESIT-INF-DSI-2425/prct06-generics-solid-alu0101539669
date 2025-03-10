// Ejercicio 4 - Impresoras y escáneres
// Teniendo en cuenta el código fuente propuesto más abajo, indique si se está violando alguno de los principios SOLID y justifique su respuesta. En tal caso, ¿podría proporcionar un mejor diseño e implementación que sí que cumpla con dichos principios?

// interface PrintableScannable {
//   print(): void
//   scan(): void
// }

// class Printer implements PrintableScannable {
//   print(): void {
//     console.log('Printing...')
//   }

//   scan(): void { }
// }

// class Scanner implements PrintableScannable {
//   print(): void { }

//   scan(): void {
//     console.log('Scanning...')
//   }
// }

// class PrinterScanner implements PrintableScannable {
//   print(): void {
//     console.log('Printing...')
//   }

//   scan(): void {
//     console.log('Scanning...')
//   }
// }

// // Client code
// const printer = new Printer();
// // Printing
// printer.print();

// const scanner = new Scanner();
// // Scanning
// scanner.scan();

// const printerScanner = new PrinterScanner();
// // Printing
// printerScanner.print();
// // Scanning
// printerScanner.scan();

// Este código viola el principio de segregación de interfaces (ISP). La interfaz PrintableScannable es demasiado
// grande y contiene métodos que no son relevantes para todas las clases que la implementan. En lugar de tener una
// interfaz grande y poco específica, se deben dividir las interfaces en interfaces más pequeñas y específicas.

//  A continuación se muestra una posible solución que cumple con ISP:

interface Printable {
    print(): void;
}

interface Scannable {
scan(): void;
}

class Printer implements Printable {
print(): void {
    console.log('Printing...');
}
}

class Scanner implements Scannable {
scan(): void {
    console.log('Scanning...');
}
}

class PrinterScanner implements Printable, Scannable {
print(): void {
    console.log('Printing...');
}

scan(): void {
    console.log('Scanning...');
}
}

// Client code
const printer = new Printer();
// Printing
printer.print();

const scanner = new Scanner();
// Scanning
scanner.scan();

const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();
