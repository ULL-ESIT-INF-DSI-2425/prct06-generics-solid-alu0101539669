// // Ejercicio 3 - Gestor de ficheros
// // Teniendo en cuenta el código fuente propuesto más abajo, indique si se está violando alguno de los principios SOLID y justifique su respuesta. En tal caso, ¿podría proporcionar un mejor diseño e implementación que sí que cumpla con dichos principios?

// // Para que el código fuente funcione correctamente, instale el paquete @types/node como una dependencia de desarrollo de su proyecto.

// import * as fs from "fs";

// class FileManager {
//   constructor(private filePath: string) {}

//   // Reads file
//   public readFile(): string {
//     try {
//       const content: string = fs.readFileSync(this.filePath, "utf-8");
//       return content;
//     } catch (error) {
//       console.error("Error al leer el archivo");
//       return "";
//     }
//   }

//   // Writes file
//   public writeFile(data: string): void {
//     try {
//       fs.writeFileSync(this.filePath, data, "utf-8");
//       console.log("Archivo escrito exitosamente.");
//     } catch (error) {
//       console.error("Error al escribir en el archivo");
//     }
//   }
// }

// // Client code
// const fileManager = new FileManager("example.txt");

// // Reading content
// const currentContent = fileManager.readFile();
// console.log("Current content:", currentContent);

// // Writing content
// const newData = "This is new content to be written into the file.";
// fileManager.writeFile(newData);

// // Updating content
// const updatedContent = fileManager.readFile();
// console.log("Updated content:", updatedContent);
 
// Este código viola el principio de responsabilidad única (SRP) y el principio de inversión de dependencias (DIP). La clase FileManager tiene la responsabilidad de leer y escribir archivos, lo que viola SRP. Además, FileManager depende directamente de la clase fs, lo que viola DIP.

// Para cumplir con SRP, se puede separar la lógica de almacenamiento en una interfaz y una implementación concreta. Para cumplir con DIP, FileManager debe depender de la interfaz en lugar de la implementación concreta de fs.

// A continuación se muestra una posible solución que cumple con SRP y DIP:

import * as fs from "fs";

// Interfaz para almacenamiento, cumpliendo DIP
interface Storage {
  read(): string;
  write(data: string): void;
}

// Implementación para archivos locales, cumpliendo SRP
class FileStorage implements Storage {
  constructor(private filePath: string) {}

  public read(): string {
    try {
      return fs.readFileSync(this.filePath, "utf-8");
    } catch (error) {
      console.error("Error al leer el archivo:", error);
      return "";
    }
  }

  public write(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo:", error);
    }
  }
}

// Clase FileManager separada de la implementación del almacenamiento
class FileManager {
  constructor(private storage: Storage) {}

  public readFile(): string {
    return this.storage.read();
  }

  public writeFile(data: string): void {
    this.storage.write(data);
  }
}

// Uso del FileManager con almacenamiento en archivos locales
const fileManager = new FileManager(new FileStorage("example.txt"));

// Leer contenido
console.log("Current content:", fileManager.readFile());

// Escribir contenido
fileManager.writeFile("This is new content to be written into the file.");

// Leer contenido actualizado
console.log("Updated content:", fileManager.readFile());
 