"use strict";
// Ejercicio 1 - DSIflix
// Imagine que tiene que diseñar el modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales:
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentaryCollection = exports.MovieCollection = exports.SeriesCollection = void 0;
class BasicStreamableCollection {
    collection;
    constructor(collection) {
        this.collection = collection;
    }
    searchByYear(year) {
        return this.collection.filter((element) => element.year === year);
    }
    searchByName(name) {
        return this.collection.filter((element) => element.name === name);
    }
    searchByGenre(genre) {
        return this.collection.filter((element) => element.genre === genre);
    }
    searchByDirector(director) {
        return this.collection.filter((element) => element.director === director);
    }
}
class SeriesCollection extends BasicStreamableCollection {
    constructor(collection) {
        super(collection);
    }
}
exports.SeriesCollection = SeriesCollection;
class MovieCollection extends BasicStreamableCollection {
    constructor(collection) {
        super(collection);
    }
}
exports.MovieCollection = MovieCollection;
class DocumentaryCollection extends BasicStreamableCollection {
    constructor(collection) {
        super(collection);
    }
}
exports.DocumentaryCollection = DocumentaryCollection;
