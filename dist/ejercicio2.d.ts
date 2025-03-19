/**
* Interfaz Discografia
* Define la estructura de una colección de discos o singles
*/
export interface Discografia<T> {
    getElementos(): T[];
}
/**
 * Clase Genérica DiscografiaCollection
 * Puede contener discos, singles o ambos
 */
export declare class DiscografiaCollection<T> implements Discografia<T> {
    private elementos;
    constructor(elementos: T[]);
    getElementos(): T[];
}
/**
 * Clase Artista
  */
export declare class Artista {
    private nombre;
    private numeroDeOyentes;
    private discografia;
    constructor(nombre: string, numeroDeOyentes: number, discografia: DiscografiaCollection<Disco | Single>);
    getNombre(): string;
    getNumeroDeOyentes(): number;
    getDiscografia(): DiscografiaCollection<Disco | Single>;
}
/**
 * Clase Disco
 */
export declare class Disco {
    private nombre;
    private año;
    private canciones;
    constructor(nombre: string, año: number, canciones: Cancion[]);
    getNombre(): string;
    getAño(): number;
    getCanciones(): Cancion[];
}
/**
 * Clase Single
 */
export declare class Single {
    private nombre;
    private año;
    private cancion;
    constructor(nombre: string, año: number, cancion: Cancion);
    getNombre(): string;
    getAño(): number;
    getCancion(): Cancion;
}
/**
 * Clase Cancion
  */
export declare class Cancion {
    private nombre;
    private duracion;
    private genero;
    private numeroDeReproducciones;
    constructor(nombre: string, duracion: number, genero: string, numeroDeReproducciones: number);
    getNombre(): string;
    getDuracion(): number;
    getGenero(): string;
    getNumeroDeReproducciones(): number;
}
/**
 * Clase BibliotecaMusical
 */
export declare class BibliotecaMusical {
    private artistas;
    constructor(artistas: Artista[]);
    getArtistas(): Artista[];
    mostrarArtistas(): void;
    buscarArtista(nombre: string): Artista | undefined;
    buscarDisco(nombre: string): Disco | undefined;
    buscarCancion(nombre: string): Cancion | undefined;
    calcularNumeroDeCanciones(disco: Disco): number;
    calcularDuracionDeDisco(disco: Disco): number;
    calcularNumeroDeReproduccionesDeDisco(disco: Disco): number;
}
