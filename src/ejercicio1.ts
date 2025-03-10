// Ejercicio 1 - DSIflix
// Imagine que tiene que diseñar el modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales:

// Defina una interfaz genérica Streamable que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta como, por ejemplo, una colección de series. Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz, que permitan obtener listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.
// Defina una clase abstracta genérica BasicStreamableCollection que implemente dicha interfaz genérica. En este punto, podrá particularizar algunas de las propiedades y métodos de la interfaz Streamable, aunque otros tendrán que permanecer como abstractos para ser definidos más abajo en la jerarquía de clases. Todo dependerá del diseño que haya llevado a cabo.
// Tendrá que extender la clase abstracta anterior para obtener subclases que modelen cada uno de los tres tipos de colecciones: series, películas y documentales.
// Trate de aplicar los principios SOLID. Preste especial atención al diseño de la interfaz Streamable. Si cree que debe dividirla en interfaces genéricas más pequeñas porque su diseño inicial es muy complejo, hágalo, con el objetivo de cumplir con el cuarto principio SOLID Interface segregation.

interface Streamable<T> {
    searchByYear(year: number): T[];
    searchByName(name: string): T[];
    searchByGenre(genre: string): T[];
    searchByDirector(director: string): T[];
}

abstract class BasicStreamableCollection<T> implements Streamable<T> {
    constructor(private collection: T[]) {}

    searchByYear(year: number): T[] {
        return this.collection.filter((element) => 
            (element as any).year === year
        );
    }
    
    searchByName(name: string): T[] {
        return this.collection.filter((element) => 
            (element as any).name === name
        );
    }

    searchByGenre(genre: string): T[] {
        return this.collection.filter((element) => 
            (element as any).genre === genre
        );
    }

    searchByDirector(director: string): T[] {
        return this.collection.filter((element) => 
            (element as any).director === director
        );
    }
    
}

// Define the Series type
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

export class SeriesCollection extends BasicStreamableCollection<Series> {
    constructor(collection: Series[]) {
        super(collection);
    }
}

export class MovieCollection extends BasicStreamableCollection<Movie> {
    constructor(collection: Movie[]) {
        super(collection);
    }
}

export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
    constructor(collection: Documentary[]) {
        super(collection);
    }
}

