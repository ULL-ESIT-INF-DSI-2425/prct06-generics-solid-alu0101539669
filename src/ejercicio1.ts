// Ejercicio 1 - DSIflix

/**
 * Interface Streamable
 * Esta interfaz define los métodos de búsqueda comunes para las colecciones de medios.
 */
interface Streamable<T> {
    searchByTitle(title: string): T[];
    searchByYear(year: number): T[];
    addMedia(media: T): void;
    removeMedia(media: T): void;
  }
  
  /**
   * Clase abstracta BasicStreamableCollection
   * Esta clase proporciona una implementación base para colecciones de medios.
   */
  abstract class BasicStreamableCollection<T> implements Streamable<T> {
    protected collection: T[] = [];
  
    abstract searchByTitle(title: string): T[];
    abstract searchByYear(year: number): T[];
  
    addMedia(media: T): void {
      this.collection.push(media);
    }
  
    removeMedia(media: T): void {
      this.collection = this.collection.filter(item => item !== media);
    }
  }
  
  interface Series {
    title: string;
    year: number;
  }
  
  interface Movie {
    title: string;
    year: number;
  }
  
  interface Documentary {
    title: string;
    year: number;
  }
  
  class SeriesCollection extends BasicStreamableCollection<Series> {
    searchByTitle(title: string): Series[] {
      return this.collection.filter(series => series.title.includes(title));
    }
  
    searchByYear(year: number): Series[] {
      return this.collection.filter(series => series.year === year);
    }
  }
  
  class MoviesCollection extends BasicStreamableCollection<Movie> {
    searchByTitle(title: string): Movie[] {
      return this.collection.filter(movie => movie.title.includes(title));
    }
  
    searchByYear(year: number): Movie[] {
      return this.collection.filter(movie => movie.year === year);
    }
  }
  
  class DocumentariesCollection extends BasicStreamableCollection<Documentary> {
    searchByTitle(title: string): Documentary[] {
      return this.collection.filter(doc => doc.title.includes(title));
    }
  
    searchByYear(year: number): Documentary[] {
      return this.collection.filter(doc => doc.year === year);
    }
  }
  
  // Ejercicio 2 - Ampliando la biblioteca musical
  
  interface Song {
    title: string;
    duration: number; // Duration in seconds
  }
  
  class Album {
    constructor(public title: string, public songs: Song[]) {}
  }
  
  class Single {
    constructor(public title: string, public song: Song) {}
  }
  
  class Discography<T> {
    constructor(public items: T[]) {}
  
    addItem(item: T): void {
      this.items.push(item);
    }
  
    removeItem(item: T): void {
      this.items = this.items.filter(i => i !== item);
    }
  }
  
  // Ejercicio 3 - Gestor de ficheros
  
  /**
   * Interfaz para leer archivos.
   */
  interface FileReader {
    read(): string;
  }
  
  /**
   * Interfaz para escribir archivos.
   */
  interface FileWriter {
    write(data: string): void;
  }
  
  class FSFileReader implements FileReader {
    constructor(private filePath: string) {}
  
    read(): string {
      return fs.readFileSync(this.filePath, "utf-8");
    }
  }
  
  class FSFileWriter implements FileWriter {
    constructor(private filePath: string) {}
  
    write(data: string): void {
      fs.writeFileSync(this.filePath, data, "utf-8");
    }
  }
  
  class FileManager {
    constructor(private fileReader: FileReader, private fileWriter: FileWriter) {}
  
    readFile(): string {
      return this.fileReader.read();
    }
  
    writeFile(data: string): void {
      this.fileWriter.write(data);
    }
  }
  
  // Ejercicio 4 - Impresoras y escáneres
  
  /**
   * Interface Printable define el método de impresión.
   */
  interface Printable {
    print(): void;
  }
  
  /**
   * Interface Scannable define el método de escaneo.
   */
  interface Scannable {
    scan(): void;
  }
  
  class Printer implements Printable {
    print(): void {
      console.log("Printing...");
    }
  }
  
  class Scanner implements Scannable {
    scan(): void {
      console.log("Scanning...");
    }
  }
  
  class PrinterScanner implements Printable, Scannable {
    print(): void {
      console.log("Printing...");
    }
  
    scan(): void {
      console.log("Scanning...");
    }
  }
  
  // Ejercicio 5 - Servicio de mensajería
  
  /**
   * Interfaz NotificationService para enviar notificaciones.
   */
  interface NotificationService {
    notify(message: string): void;
  }
  
  class EmailService implements NotificationService {
    notify(message: string): void {
      console.log(`Sending notification by email: ${message}`);
    }
  }
  
  class ShortMessageService implements NotificationService {
    notify(message: string): void {
      console.log(`Sending notification by SMS: ${message}`);
    }
  }
  
  class Notifier {
    constructor(private notificationService: NotificationService) {}
  
    sendNotification(message: string): void {
      this.notificationService.notify(message);
    }
  }
  
  // Ejercicio 6 - No todos los pájaros vuelan
  
  /**
   * Interface Flyable define el método de vuelo.
   */
  interface Flyable {
    fly(): void;
  }
  
  class Bird {}
  
  class Sparrow extends Bird implements Flyable {
    fly(): void {
      console.log("Flying...");
    }
  }
  
  class Penguin extends Bird {}
  
  // Fin del archivo
  