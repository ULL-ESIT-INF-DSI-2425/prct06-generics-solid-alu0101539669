import { describe, test, expect } from "vitest";
import { Pokemon, Pokedex, Combat } from "../src/ejercicio1";
//import { Artista, Disco, Cancion, BibliotecaMusical } from "../src/ejercicio2";

import { vehiculo, Coche, Moto } from "../src/ejercicio3";

// Ejercicio 1

describe("Pokemon Class", () => {
    test("Crear un Pokemon correctamente", () => {
        const charmander = new Pokemon("Charmander", 8.5, 0.6, "fuego", 52, 43, 65, 39);
        expect(charmander.getNombre()).toBe("Charmander");
        expect(charmander.getTipo()).toBe("fuego");
        expect(charmander.getHp()).toBe(39);
    });

    test("Recibir daño", () => {
        const pikachu = new Pokemon("Pikachu", 6, 0.4, "eléctrico", 55, 40, 90, 35);
        pikachu.recibirDaño(10);
        expect(pikachu.getHp()).toBe(25);
        pikachu.recibirDaño(30); // No debe ser negativo
        expect(pikachu.getHp()).toBe(0);
    });
});

describe("Pokedex Class", () => {
    test("Añadir y buscar un Pokemon", () => {
        const pokedex = new Pokedex();
        const squirtle = new Pokemon("Squirtle", 9, 0.5, "agua", 48, 65, 43, 44);
        pokedex.setPokemon(squirtle);

        const pokemon = pokedex.buscarPokemon("agua");
        expect(pokemon).toBe("Squirtle - Tipo: agua - HP: 44");
+        pokedex.buscarPokemon("agua");
    });
});

describe("Combat Class", () => {
    test("Calcula daño correctamente", () => {
        const charmander = new Pokemon("Charmander", 8.5, 0.6, "fuego", 52, 43, 65, 39);
        const bulbasaur = new Pokemon("Bulbasaur", 6.9, 0.7, "hierba", 49, 49, 45, 45);

        const combate = new Combat(charmander, bulbasaur);
        const daño = combate.calcularDaño(charmander, bulbasaur);

        expect(daño).toBeCloseTo(50 * (52 / 49) * 2, 2); // Comprobamos con la fórmula
    });

    test("Simulación de combate", () => {
        const charmander = new Pokemon("Charmander", 8.5, 0.6, "fuego", 52, 43, 65, 39);
        const bulbasaur = new Pokemon("Bulbasaur", 6.9, 0.7, "hierba", 49, 49, 45, 45);

        const combate = new Combat(charmander, bulbasaur);
        const resultado = combate.start();

        expect(resultado).toMatch(/ha ganado el combate!/);
    });
});

//Ejercicio2

// describe("Artista Class", () => {
//     test("Crear un Artista correctamente", () => {
//         const artista = new Artista("The Beatles", 1000000, []);
//         expect(artista.getNombre()).toBe("The Beatles");
//         expect(artista.getNumeroDeOyentes()).toBe(1000000);
//     });
// });

// describe("Disco Class", () => {
//     test("Crear un Disco correctamente", () => {
//         const disco = new Disco("Abbey Road", 1969, []);
//         expect(disco.getNombre()).toBe("Abbey Road");
//         expect(disco.getAño()).toBe(1969);
//     });
// });

// describe("Cancion Class", () => {
//     test("Crear una Canción correctamente", () => {
//         const cancion = new Cancion("Come Together", 4.2, "rock", true, 1000000);
//         expect(cancion.getNombre()).toBe("Come Together");
//         expect(cancion.getGenero()).toBe("rock");
//         expect(cancion.getSingle()).toBe(true);
//     });
// });


//Ejercicio

describe("Coche", () => {
    test("Crear un coche correctamente", () => {
        const COCHE = new Coche ("8806KZS", "Toyota", "Corolla", 1200, 60, "azul",4,true);
        expect(COCHE.getData()).toBe('Coche: Toyota Corolla, Matrícula: 8806KZS, Color: azul, Puertas: 4, Descapotable¿? true')
    });
    test("Comprobar getters y setters", () => {
        const coche = new Coche("1234ABC", "Ford", "Focus", 1600, 90, "rojo", 5, false);
        coche.NumeroPuertas = 3;
        coche.Descapotable = true;
        expect(coche.NumeroPuertas).toBe(3);
        expect(coche.Descapotable).toBe(true);
    });

});

describe("Moto", () => {
    test("Crear una moto correctamente", () => {
        const moto = new Moto ("8806KZS", "KTM", "Superbike", 2400, 120, "negro", "completo", "libre");
        expect(moto.getData()).toBe('Moto: KTM Superbike, Matrícula: 8806KZS, Color: negro, Tipo de manillar: completo, Tipo de escape libre')
    });

    test("Comprobar getters y setters", () => {
        const moto = new Moto("9101DEF", "Yamaha", "R1", 1000, 180, "azul", "deportivo", "cerrado");
        moto.Manillar = "turismo";
        moto.Escape = "abierto";
        expect(moto.Manillar).toBe("turismo");
        expect(moto.Escape).toBe("abierto");
    });
});





