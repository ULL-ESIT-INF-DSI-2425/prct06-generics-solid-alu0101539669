import { describe, test, expect } from 'vitest';

import { SeriesCollection, MovieCollection, DocumentaryCollection } from '../src/ejercicio1';
import { Artista, Disco, Single, Cancion, DiscografiaCollection, BibliotecaMusical } from '../src/ejercicio2';

import { Complex, ArithmeticableCollection } from "../src/ejerciciomod";


describe("SeriesCollection Tests", () => {
    const series = new SeriesCollection([
        { year: 2020, name: "Series1", genre: "Comedy", director: "Director1" },
        { year: 2019, name: "Series2", genre: "Drama", director: "Director2" },
        { year: 2018, name: "Series3", genre: "Action", director: "Director3" }
    ]);

    test("Buscar por nombre", () => {
        expect(series.searchByName("Series1")).toEqual([{ year: 2020, name: "Series1", genre: "Comedy", director: "Director1" }]);
        expect(series.searchByName("Unknown")).toEqual([]);
    });

    test("Buscar por género", () => {
        expect(series.searchByGenre("Drama")).toEqual([{ year: 2019, name: "Series2", genre: "Drama", director: "Director2" }]);
        expect(series.searchByGenre("Unknown")).toEqual([]);
    });

    test("Buscar por director", () => {
        expect(series.searchByDirector("Director3")).toEqual([{ year: 2018, name: "Series3", genre: "Action", director: "Director3" }]);
        expect(series.searchByDirector("Unknown")).toEqual([]);
    });

    test("Buscar por año", () => {
        expect(series.searchByYear(2018)).toEqual([{ year: 2018, name: "Series3", genre: "Action", director: "Director3" }]);
        expect(series.searchByYear(2021)).toEqual([]);
    });

    test("Buscar por año y género", () => {
        expect(series.searchByYear(2019)).toEqual([{ year: 2019, name: "Series2", genre: "Drama", director: "Director2" }]);
        expect(series.searchByGenre("Drama")).toEqual([{ year: 2019, name: "Series2", genre: "Drama", director: "Director2" }]);
    });

    test("Buscar por año y director", () => {
        expect(series.searchByYear(2018)).toEqual([{ year: 2018, name: "Series3", genre: "Action", director: "Director3" }]);
        expect(series.searchByDirector("Director3")).toEqual([{ year: 2018, name: "Series3", genre: "Action", director: "Director3" }]);
    });

    test("Buscar por género y director", () => {
        expect(series.searchByGenre("Drama")).toEqual([{ year: 2019, name: "Series2", genre: "Drama", director: "Director2" }]);
        expect(series.searchByDirector("Director2")).toEqual([{ year: 2019, name: "Series2", genre: "Drama", director: "Director2" }]);
    });

    test("Buscar por año, género y director", () => {
        expect(series.searchByYear(2019)).toEqual([{ year: 2019, name: "Series2", genre: "Drama", director: "Director2" }]);
        expect(series.searchByGenre("Drama")).toEqual([{ year: 2019, name: "Series2", genre: "Drama", director: "Director2" }]);
        expect(series.searchByDirector("Director2")).toEqual([{ year: 2019, name: "Series2", genre: "Drama", director: "Director2" }]);
    });

    test("Buscar por nombre inexistente", () => {
        expect(series.searchByName("Unknown")).toEqual([]);
    });
});

describe("MovieCollection Tests", () => {
    const movies = new MovieCollection([
        { year: 2020, name: "Movie1", genre: "Comedy", director: "Director1" },
        { year: 2019, name: "Movie2", genre: "Drama", director: "Director2" },
        { year: 2018, name: "Movie3", genre: "Action", director: "Director3" }
    ]);

    test("Buscar por nombre", () => {
        expect(movies.searchByName("Movie1")).toEqual([{ year: 2020, name: "Movie1", genre: "Comedy", director: "Director1" }]);
        expect(movies.searchByName("Unknown")).toEqual([]);
    });

    test("Buscar por género", () => {
        expect(movies.searchByGenre("Drama")).toEqual([{ year: 2019, name: "Movie2", genre: "Drama", director: "Director2" }]);
        expect(movies.searchByGenre("Unknown")).toEqual([]);
    });

    test("Buscar por director", () => {
        expect(movies.searchByDirector("Director3")).toEqual([{ year: 2018, name: "Movie3", genre: "Action", director: "Director3" }]);
        expect(movies.searchByDirector("Unknown")).toEqual([]);
    });

    test("Buscar por año", () => {
        expect(movies.searchByYear(2018)).toEqual([{ year: 2018, name: "Movie3", genre: "Action", director: "Director3" }]);
        expect(movies.searchByYear(2021)).toEqual([]);
    });

    test("Buscar por año y género", () => {
        expect(movies.searchByYear(2019)).toEqual([{ year: 2019, name: "Movie2", genre: "Drama", director: "Director2" }]);
        expect(movies.searchByGenre("Drama")).toEqual([{ year: 2019, name: "Movie2", genre: "Drama", director: "Director2" }]);
    });

});

describe("DocumentaryCollection Tests", () => {
    const documentaries = new DocumentaryCollection([
        { year: 2020, name: "Documentary1", genre: "Science", director: "Director1" },
        { year: 2019, name: "Documentary2", genre: "History", director: "Director2" },
        { year: 2018, name: "Documentary3", genre: "Nature", director: "Director3" }
    ]);

    test("Buscar por nombre", () => {
        expect(documentaries.searchByName("Documentary1")).toEqual([{ year: 2020, name: "Documentary1", genre: "Science", director: "Director1" }]);
        expect(documentaries.searchByName("Unknown")).toEqual([]);
    });

    test("Buscar por género", () => {
        expect(documentaries.searchByGenre("History")).toEqual([{ year: 2019, name: "Documentary2", genre: "History", director: "Director2" }]);
        expect(documentaries.searchByGenre("Unknown")).toEqual([]);
    });

    test("Buscar por director", () => {
        expect(documentaries.searchByDirector("Director3")).toEqual([{ year: 2018, name: "Documentary3", genre: "Nature", director: "Director3" }]);
        expect(documentaries.searchByDirector("Unknown")).toEqual([]);
    });

    test("Buscar por año", () => {
        expect(documentaries.searchByYear(2018)).toEqual([{ year: 2018, name: "Documentary3", genre: "Nature", director: "Director3" }]);
        expect(documentaries.searchByYear(2021)).toEqual([]);
    });

    test("Buscar por año y género", () => {
        expect(documentaries.searchByYear(2019)).toEqual([{ year: 2019, name: "Documentary2", genre: "History", director: "Director2" }]);
        expect(documentaries.searchByGenre("History")).toEqual([{ year: 2019, name: "Documentary2", genre: "History", director: "Director2" }]);
    });

});

describe("BibliotecaMusical Tests", () => {
    const cancion1 = new Cancion("Song1", 3.5, "Rock", 1000);
    const cancion2 = new Cancion("Song2", 4, "Pop", 500);
    const disco = new Disco("Album1", 2020, [cancion1, cancion2]);
    const single = new Single("HitSingle", 2022, cancion1);
    const discografia = new DiscografiaCollection([disco, single]);
    const artista = new Artista("Artist1", 10000, discografia);
    const biblioteca = new BibliotecaMusical([artista]);

    test("Debe buscar un artista por nombre", () => {
        expect(biblioteca.buscarArtista("Artist1")).toBe(artista);
        expect(biblioteca.buscarArtista("Unknown")).toBeUndefined();
    });

    test("Debe buscar un disco por nombre", () => {
        expect(biblioteca.buscarDisco("Album1")).toBe(disco);
        expect(biblioteca.buscarDisco("Unknown")).toBeUndefined();
    });

    test("Debe buscar una canción por nombre", () => {
        expect(biblioteca.buscarCancion("Song1")).toBe(cancion1);
        expect(biblioteca.buscarCancion("Unknown")).toBeUndefined();
    });

    test("Debe calcular el número de canciones en un disco", () => {
        expect(biblioteca.calcularNumeroDeCanciones(disco)).toBe(2);
    });

    test("Debe calcular la duración total de un disco", () => {
        expect(biblioteca.calcularDuracionDeDisco(disco)).toBe(7.5);
    });

    test("Debe calcular el número total de reproducciones de un disco", () => {
        expect(biblioteca.calcularNumeroDeReproduccionesDeDisco(disco)).toBe(1500);
    });
});


describe("Complex class", () => {
    test("Deberia realizar la suma correctamente", () => {
      const c1 = new Complex(2, 3);
      const c2 = new Complex(1, 4);
      const result = c1.add(c2);
      expect(result.RealNumber).toBe(3);
      expect(result.ImaginaryNumber).toBe(7);
    });
  
    test("Deberia realizar la suma correctamente", () => {
        const c1 = new Complex(2, 7);
        const c2 = new Complex(3, -4);
        const result = c1.add(c2);
        expect(result.RealNumber).toBe(5);
        expect(result.ImaginaryNumber).toBe(3);
    });

    test("Deberia realizar la resta correctamente", () => {
        const c1 = new Complex(9, 5);
        const c2 = new Complex(4, 7);
        const result = c1.substract(c2);
        expect(result.RealNumber).toBe(5);
        expect(result.ImaginaryNumber).toBe(-2);
    });
    
    test("Deberia realizar la resta correctamente", () => {
        const c1 = new Complex(9, 5);
        const c2 = new Complex(4, 7);
        const result = c1.substract(c2);
        expect(result.RealNumber).toBe(5);
        expect(result.ImaginaryNumber).toBe(-2);
    });
  
    test("Deberia realizar la multiplicacion correctamente", () => {
      const c1 = new Complex(1, 2);
      const c2 = new Complex(3, 4);
      const result = c1.multiply(c2);
      expect(result.RealNumber).toBe(-5);
      expect(result.ImaginaryNumber).toBe(10);
    });

    test("Deberia realizar la multiplicacion correctamente", () => {
        const c1 = new Complex(5, 2);
        const c2 = new Complex(2, -3);
        const result = c1.multiply(c2);
        expect(result.RealNumber).toBe(16);
        expect(result.ImaginaryNumber).toBe(-11);
    });
  
    test("Deberia realizar la division correctamente", () => {
      const c1 = new Complex(4, 2);
      const c2 = new Complex(3, -1);
      const result = c1.divide(c2);
      expect(result.RealNumber).toBeCloseTo(1);
      expect(result.ImaginaryNumber).toBeCloseTo(1);
    });

    test("Deberia realizar la division correctamente", () => {
        const c1 = new Complex(3, 2);
        const c2 = new Complex(1, -2);
        const result = c1.divide(c2);
        expect(result.RealNumber).toBeCloseTo(-1/5);
        expect(result.ImaginaryNumber).toBeCloseTo(8/5);
      });

});

    
describe("ArithmeticableCollection class", () => {
    test("Añade y obtiene el elemento correctaamente", () => {
      const collection = new ArithmeticableCollection<Complex>();
      const c1 = new Complex(1, 1);
      collection.addArithmeticable(c1);
      expect(collection.getArithmeticable(0)).toBe(c1);
    });


    test("Añade y obtiene el elemento correctaamente", () => {
        const collection = new ArithmeticableCollection<Complex>();
        const c1 = new Complex(1, 1);
        const c2 = new Complex(1, 2);
        const c3 = new Complex(3, 1);
        const c4 = new Complex(2, 5);
        const c5 = new Complex(3, 8);
        const c6 = new Complex(4, 6);
        collection.addArithmeticable(c1);
        collection.addArithmeticable(c2);
        collection.addArithmeticable(c3);
        collection.addArithmeticable(c4);
        collection.addArithmeticable(c5);
        collection.addArithmeticable(c6);
        expect(collection.getArithmeticable(4)).toBe(c5);
        
    });

    test("Retorna el tamaño de la colección", () => {
        const collection = new ArithmeticableCollection<Complex>();
        expect(collection.getNumbeOfArithmeticables()).toBe(0);
        collection.addArithmeticable(new Complex(2, 2));
        collection.addArithmeticable(new Complex(2, 2));
        collection.addArithmeticable(new Complex(2, 2));
        collection.addArithmeticable(new Complex(2, 2));
        collection.addArithmeticable(new Complex(2, 2));
        expect(collection.getNumbeOfArithmeticables()).toBe(5);
    });
});
  
