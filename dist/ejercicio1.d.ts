interface Streamable<T> {
    searchByYear(year: number): T[];
    searchByName(name: string): T[];
    searchByGenre(genre: string): T[];
    searchByDirector(director: string): T[];
}
declare abstract class BasicStreamableCollection<T> implements Streamable<T> {
    private collection;
    constructor(collection: T[]);
    searchByYear(year: number): T[];
    searchByName(name: string): T[];
    searchByGenre(genre: string): T[];
    searchByDirector(director: string): T[];
}
interface Series {
    year: number;
    name: string;
    genre: string;
    director: string;
}
interface Movie {
    year: number;
    name: string;
    genre: string;
    director: string;
}
interface Documentary {
    year: number;
    name: string;
    genre: string;
    director: string;
}
declare class SeriesCollection extends BasicStreamableCollection<Series> {
    constructor(collection: Series[]);
}
declare class MovieCollection extends BasicStreamableCollection<Movie> {
    constructor(collection: Movie[]);
}
declare class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
    constructor(collection: Documentary[]);
}
