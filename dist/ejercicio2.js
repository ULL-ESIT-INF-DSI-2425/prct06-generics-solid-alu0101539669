"use strict";
// Ejercicio 2 - Ampliando la biblioteca musical
// Teniendo en cuenta el ejercicio de la biblioteca musical de prácticas anteriores, mejore su diseño tratando de cumplir el mayor número de principios SOLID posible, si es que aún no los cumple.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliotecaMusical = exports.Cancion = exports.Single = exports.Disco = exports.Artista = exports.DiscografiaCollection = void 0;
/**
 * Clase Genérica DiscografiaCollection
 * Puede contener discos, singles o ambos
 */
class DiscografiaCollection {
    elementos;
    constructor(elementos) {
        this.elementos = elementos;
    }
    getElementos() { return this.elementos; }
}
exports.DiscografiaCollection = DiscografiaCollection;
/**
 * Clase Artista
  */
class Artista {
    nombre;
    numeroDeOyentes;
    discografia;
    constructor(nombre, numeroDeOyentes, discografia) {
        this.nombre = nombre;
        this.numeroDeOyentes = numeroDeOyentes;
        this.discografia = discografia;
    }
    getNombre() { return this.nombre; }
    getNumeroDeOyentes() { return this.numeroDeOyentes; }
    getDiscografia() { return this.discografia; }
}
exports.Artista = Artista;
/**
 * Clase Disco
 */
class Disco {
    nombre;
    año;
    canciones;
    constructor(nombre, año, canciones) {
        this.nombre = nombre;
        this.año = año;
        this.canciones = canciones;
    }
    getNombre() { return this.nombre; }
    getAño() { return this.año; }
    getCanciones() { return this.canciones; }
}
exports.Disco = Disco;
/**
 * Clase Single
 */
class Single {
    nombre;
    año;
    cancion;
    constructor(nombre, año, cancion) {
        this.nombre = nombre;
        this.año = año;
        this.cancion = cancion;
    }
    getNombre() { return this.nombre; }
    getAño() { return this.año; }
    getCancion() { return this.cancion; }
}
exports.Single = Single;
/**
 * Clase Cancion
  */
class Cancion {
    nombre;
    duracion;
    genero;
    numeroDeReproducciones;
    constructor(nombre, duracion, genero, numeroDeReproducciones) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.genero = genero;
        this.numeroDeReproducciones = numeroDeReproducciones;
    }
    getNombre() { return this.nombre; }
    getDuracion() { return this.duracion; }
    getGenero() { return this.genero; }
    getNumeroDeReproducciones() { return this.numeroDeReproducciones; }
}
exports.Cancion = Cancion;
/**
 * Clase BibliotecaMusical
 */
class BibliotecaMusical {
    artistas;
    constructor(artistas) {
        this.artistas = artistas;
    }
    getArtistas() { return this.artistas; }
    mostrarArtistas() {
        console.table(this.artistas.map(a => ({ Nombre: a.getNombre(), Oyentes: a.getNumeroDeOyentes() })));
    }
    buscarArtista(nombre) {
        return this.artistas.find(artista => artista.getNombre() === nombre);
    }
    buscarDisco(nombre) {
        return this.artistas.flatMap(a => a.getDiscografia().getElementos()).filter(e => e instanceof Disco).find(d => d.getNombre() === nombre);
    }
    buscarCancion(nombre) {
        return this.artistas.flatMap(a => a.getDiscografia().getElementos())
            .flatMap(d => d instanceof Disco ? d.getCanciones() : [d.getCancion()])
            .find(c => c.getNombre() === nombre);
    }
    calcularNumeroDeCanciones(disco) {
        return disco.getCanciones().length;
    }
    calcularDuracionDeDisco(disco) {
        return disco.getCanciones().reduce((acc, cancion) => acc + cancion.getDuracion(), 0);
    }
    calcularNumeroDeReproduccionesDeDisco(disco) {
        return disco.getCanciones().reduce((acc, cancion) => acc + cancion.getNumeroDeReproducciones(), 0);
    }
}
exports.BibliotecaMusical = BibliotecaMusical;
