interface Printable {
    print(): void;
}
interface Scannable {
    scan(): void;
}
declare class Printer implements Printable {
    print(): void;
}
declare class Scanner implements Scannable {
    scan(): void;
}
declare class PrinterScanner implements Printable, Scannable {
    print(): void;
    scan(): void;
}
declare const printer: Printer;
declare const scanner: Scanner;
declare const printerScanner: PrinterScanner;
