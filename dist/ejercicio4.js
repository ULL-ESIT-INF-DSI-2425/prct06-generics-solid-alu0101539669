// Ejercicio 4 - Impresoras y escáneres
// Teniendo en cuenta el código fuente propuesto más abajo, indique si se está violando alguno de los principios SOLID y justifique su respuesta. En tal caso, ¿podría proporcionar un mejor diseño e implementación que sí que cumpla con dichos principios?
class Printer {
    print() {
        console.log('Printing...');
    }
}
class Scanner {
    scan() {
        console.log('Scanning...');
    }
}
class PrinterScanner {
    print() {
        console.log('Printing...');
    }
    scan() {
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
