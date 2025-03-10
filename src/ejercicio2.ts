//Ejericio2


/**
 * Clase Artista
 *  
 * @export  Artista necesario para la BibliotecaMusical
 * @class Artista donde se almacena la información de un artista
 * @param nombre Nombre del artista
 * @param numeroDeOyentes Número de oyentes del artista
 * @param Discogrefia Discografía del artista
 * @method getNombre() Devuelve el nombre del artista
 * @method getNumeroDeOyentes() Devuelve el número de oyentes del artista
 * @method getDiscografia() Devuelve la discografía del artista
 * 
 */
export class Artista {
    constructor(private nombre: string, private numeroDeOyentes: number, private Discogrefia: Disco[]) {}

    getNombre(): string { return this.nombre; }
    getNumeroDeOyentes(): number { return this.numeroDeOyentes; }
    getDiscografia(): Disco[] { return this.Discogrefia; }
}

/**
 * Clase Disco
 *  
 * @export  Disco necesario para la BibliotecaMusical
 * @class Disco donde
 * @param nombre Nombre del disco
 * @param año Año de lanzamiento del disco
 * @param canciones Canciones del disco
 * @method getNombre() Devuelve el nombre del disco
 * @method getAño() Devuelve el año de lanzamiento del disco
 * @method getCanciones() Devuelve las canciones del disco
* 
*/
export class Disco {
    constructor(private nombre: string, private año: number, private canciones: Cancion[]) {}

    getNombre(): string { return this.nombre; }
    getAño(): number { return this.año; }
    getCanciones(): Cancion[] { return this.canciones; }
}

/**
 * Clase Cancion
 *  
 * @export  Cancion necesario para la BibliotecaMusical
 * @class Cancion donde se almacena la información de una canción
 * @param nombre Nombre de la canción
 * @param duracion Duración de la canción
 * @param genero Género de la canción
 * @param single Si es un single o no
 * @param numeroDeReproducciones Número de reproducciones de la canción
 * @method getNombre() Devuelve el nombre de la canción
 * @method getDuracion() Devuelve la duración de la canción
 * @method getGenero() Devuelve el género de la canción
 * @method getSingle() Devuelve si es un single o no
 * @method getNumeroDeReproducciones() Devuelve el número de reproducciones de la canción
 * 
 */
export class Cancion {
    constructor(private nombre: string, private duracion: number, private genero: string, private single: boolean, private numeroDeReproducciones: number) {}

    getNombre(): string { return this.nombre; }
    getDuracion(): number { return this.duracion; }
    getGenero(): string { return this.genero; }
    getSingle(): boolean { return this.single; }
    getNumeroDeReproducciones(): number { return this.numeroDeReproducciones; }
}

/**
 * Clase BibliotecaMusical
 *
 * @export  BibliotecaMusical necesario para almacenar la información de los artistas
 * @class BibliotecaMusical donde se almacena la información de los artistas
 * @param artistas Array de artistas
 * @method getArtistas() Devuelve el array de artistas
 * @method mostrarArtistas() Muestra los artistas en consola
 * @method buscarArtista (nombre: string) Busca un artista por su nombre
 * @method buscarDisco (nombre: string) Busca un disco por su nombre
 *  
*/
export class BibliotecaMusical {
    constructor(private artistas: Artista[]) {}
    
    getArtistas(): Artista[] { return this.artistas; }

    mostrarArtistas() {
        console.table(this.artistas);
    }

    buscarArtista(nombre: string) {
        const artista = this.artistas.find(artista => artista.getNombre() === nombre);
        if (artista) {
            console.table(artista);
        } else {
            console.log("Artista no encontrado");
        }
    }

    buscarDisco(nombre: string) {
        const disco = this.artistas.flatMap(artista => artista.getDiscografia()).find(disco => disco.getNombre() === nombre);
        if (disco) {
            console.table(disco);
        } else {
            console.log("Disco no encontrado");
        }
    }

    buscarCancion(nombre: string) {
        const cancion = this.artistas.flatMap(artista => artista.getDiscografia().flatMap(disco => disco.getCanciones())).find(cancion => cancion.getNombre() === nombre);
        if (cancion) {
            console.table(cancion);
        } else {
            console.log("Canción no encontrada");
        }
    }

    calcularNumeroDeCanciones(disco: Disco) {
        return disco.getCanciones().length;
    }

    calcularDuracionDeDisco(disco: Disco) {
        return disco.getCanciones().reduce((acc, cancion) => acc + cancion.getDuracion(), 0);
    }

    calcularNumeroDeReproduccionesDeDisco(disco: Disco) {
        return disco.getCanciones().reduce((acc, cancion) => acc + cancion.getNumeroDeReproducciones(), 0);
    }
}
