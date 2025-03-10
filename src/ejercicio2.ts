// Ejercicio 2 - Ampliando la biblioteca musical
// Teniendo en cuenta el ejercicio de la biblioteca musical de prácticas anteriores, mejore su diseño tratando de cumplir el mayor número de principios SOLID posible, si es que aún no los cumple.

// Luego, trate de introducir las siguientes modificaciones a su diseño:

// Ahora, la discografía de un artista podrá estar formada por una colección de discos o de singles. Por lo tanto, tendrá que contemplar la nueva entidad single. Generalmente, un single se diferencia de un disco en que el single contiene una única canción o varias versiones de la misma canción.

// Además, ahora deberá hacer que la discografía sea una clase genérica. En algún punto de su código deberá concretar esta clase genérica indicando que la discografía puede ser una colección de discos, una colección de singles o una colección de discos y singles.
 
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
export class DiscografiaCollection<T> implements Discografia<T> {
    constructor(private elementos: T[]) {}

    getElementos(): T[] { return this.elementos; }
}

/**
 * Clase Artista
  */
export class Artista {
    constructor(private nombre: string, private numeroDeOyentes: number, private discografia: DiscografiaCollection<Disco | Single>) {}

    getNombre(): string { return this.nombre; }
    getNumeroDeOyentes(): number { return this.numeroDeOyentes; }
    getDiscografia(): DiscografiaCollection<Disco | Single> { return this.discografia; }
}

/**
 * Clase Disco
 */
export class Disco {
    constructor(private nombre: string, private año: number, private canciones: Cancion[]) {}

    getNombre(): string { return this.nombre; }
    getAño(): number { return this.año; }
    getCanciones(): Cancion[] { return this.canciones; }
}

/**
 * Clase Single
 */
export class Single {
    constructor(private nombre: string, private año: number, private cancion: Cancion) {}

    getNombre(): string { return this.nombre; }
    getAño(): number { return this.año; }
    getCancion(): Cancion { return this.cancion; }
}

/**
 * Clase Cancion
  */
export class Cancion {
    constructor(private nombre: string, private duracion: number, private genero: string, private numeroDeReproducciones: number) {}

    getNombre(): string { return this.nombre; }
    getDuracion(): number { return this.duracion; }
    getGenero(): string { return this.genero; }
     getNumeroDeReproducciones(): number { return this.numeroDeReproducciones; }
}

/**
 * Clase BibliotecaMusical
 */
export class BibliotecaMusical {
    constructor(private artistas: Artista[]) {}
    
    getArtistas(): Artista[] { return this.artistas; }

    mostrarArtistas() {
        console.table(this.artistas.map(a => ({ Nombre: a.getNombre(), Oyentes: a.getNumeroDeOyentes() })));
    }

    buscarArtista(nombre: string): Artista | undefined {
        return this.artistas.find(artista => artista.getNombre() === nombre);
    }

    buscarDisco(nombre: string): Disco | undefined {
        return this.artistas.flatMap(a => a.getDiscografia().getElementos()).filter(e => e instanceof Disco).find(d => (d as Disco).getNombre() === nombre) as Disco;
    }

    buscarCancion(nombre: string): Cancion | undefined {
        return this.artistas.flatMap(a => a.getDiscografia().getElementos())
            .flatMap(d => d instanceof Disco ? d.getCanciones() : [(d as Single).getCancion()])
            .find(c => c.getNombre() === nombre);
    }

    calcularNumeroDeCanciones(disco: Disco): number {
        return disco.getCanciones().length;
    }

    calcularDuracionDeDisco(disco: Disco): number {
        return disco.getCanciones().reduce((acc, cancion) => acc + cancion.getDuracion(), 0);
    }

    calcularNumeroDeReproduccionesDeDisco(disco: Disco): number {
        return disco.getCanciones().reduce((acc, cancion) => acc + cancion.getNumeroDeReproducciones(), 0);
    }
} 