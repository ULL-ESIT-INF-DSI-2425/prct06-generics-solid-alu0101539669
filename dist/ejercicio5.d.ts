/**
 * Cree la estructura de clases e interfaces que considere oportuna para
 * representar una Pokedex donde se almacene información relacionada con distintos
 * Pokemons. En concreto, para cada Pokemon, se deben almacenar los siguientes
 * elementos de información:
 *      Nombre
 *      Peso y altura
 *      Tipo
 *
 * Estadísticas básicas: ataque, defensa, velocidad, daño máximo (HP).
 * Puede encontrar información relativa aquí.
 * La Pokedex permitirá mostrar información acerca de los diferentes Pokemons almacenados,
 * además de buscar diferentes Pokemons teniendo en cuenta todos y cada uno de los campos
 *  de información mencionados con anterioridad. Por ejemplo, la Pokedex permitirá buscar
 *  todos aquellos Pokémons que sean de tipo fuego.
 *
 * Luego, diseñe una clase Combat que simule el combate entre dos Pokemons.
 * Para ello, un objeto de la clase Combat deberá ser construido con dos contrincantes.
 * Incluya un método start dentro de la clase Combat que realice la simulación del combate.
 * Este método se basará en lo siguiente:
 *
 *      Teniendo en cuenta un sistema de turnos, un contrincante Pokemon atacará
 *      al otro en cada turno, haciendo que el HP del Pokemon atacado disminuya
 *      dependiendo del daño infringido.
 *
 *      Se considera que el primero de los contrincantes con el que se construye
 *      un objeto de la clase Combat será siempre el primero en realizar un ataque.
 *
 *      El método deberá mostrar por pantalla la evolución del combate.
 *      Esto es, después de cada ataque se debe mostrar el estado de HP de cada
 *      contrincante.
 *
 * El daño que un Pokemon infringe sobre el contrincante en cada turno se calcula a
 * partir de la siguiente fórmula:
 *       daño = 50 * (ataque / defensa) * efectividad
 *
 * Donde ataque es la capacidad de ataque del pokemon que ataca,
 * defensa es la capacidad de defensa del oponente y la efectividad del ataque se
 * basa en lo expuesto a continuación. Los ataques pueden ser efectivos, neutrales
 * o no efectivos. Esto depende del tipo de los dos Pokemons que estén combatiendo.
 * Considerando únicamente Pokemons de tipo fuego, agua, hierba y eléctrico,
 * se establece lo siguiente:
 *
 * fuego > hierba
 * fuego < agua
 * fuego = eléctrico
 * agua < hierba
 * agua < eléctrico
 * hierba = eléctrico
 *  Por ejemplo, un Pokemon de fuego provocará un ataque efectivo sobre uno de hierba,
 *  el ataque de uno de fuego será neutral respecto a uno eléctrico, y uno de fuego
 *  provocará un ataque no efectivo sobre uno de agua. Teniendo en cuenta lo anterior,
 *  la efectividad tomará los siguientes valores:
 *
 * Efectivo => efectividad = 2
 * Neutral => efectividad = 1
 * No efectivo => efectividad = 0.5
 *
 */
/**
 * Clase Pokemon
 *
 * @export  Pokemon necesario para la Pokedex
 * @class Pokemon donde se almacena la información de un Pokemon
 */
export declare class Pokemon {
    private nombre;
    private peso;
    private altura;
    private tipo;
    private ataque;
    private defensa;
    private velocidad;
    private hp;
    constructor(nombre: string, peso: number, altura: number, tipo: string, ataque: number, defensa: number, velocidad: number, hp: number);
    getTipo(): string;
    getNombre(): string;
    getHp(): number;
    getAtaque(): number;
    getDefensa(): number;
    getVelocidad(): number;
    getPeso(): number;
    getAltura(): number;
    recibirDaño(daño: number): void;
}
/**
 * Clase Pokedex
 *
 * @export  Pokedex necesario para almacenar la información de los Pokemons
 * @class Pokedex donde se almacena la información de los Pokemons
 */
export declare class Pokedex {
    private pokemons;
    setPokemon(pokemon: Pokemon): void;
    buscarPokemon(criterio: string): string;
    mostrarTodos(): void;
}
/**
 * Clase Combat
 *
 * @export  Combat necesario para simular el combate entre dos Pokemons
 * @class Combat donde se simula el combate entre dos Pokemons
 */
export declare class Combat {
    private pokemon1;
    private pokemon2;
    constructor(pokemon1: Pokemon, pokemon2: Pokemon);
    calcularDaño(atacante: Pokemon, defensor: Pokemon): number;
    start(): string;
}
