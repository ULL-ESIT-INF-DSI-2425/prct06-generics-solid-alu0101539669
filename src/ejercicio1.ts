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

export class Pokemon {
    // Atributos de la clase Pokemon
    constructor(
        private nombre: string,
        private peso: number,
        private altura: number,
        private tipo: string,
        private ataque: number,
        private defensa: number,
        private velocidad: number,
        private hp: number
    ) {}

    // Métodos de la clase Pokemon
    getTipo(): string { return this.tipo; }
    getNombre(): string { return this.nombre; }
    getHp(): number { return this.hp; }
    getAtaque(): number { return this.ataque; }
    getDefensa(): number { return this.defensa; }
    getVelocidad(): number { return this.velocidad; }
    getPeso(): number { return this.peso; }
    getAltura(): number { return this.altura; }

    recibirDaño(daño: number): void {
        this.hp = Math.max(0, this.hp - daño);  // Evita HP negativos
    }
}

/**
 * Clase Pokedex
 *
 * @export  Pokedex necesario para almacenar la información de los Pokemons
 * @class Pokedex donde se almacena la información de los Pokemons
 */
export class Pokedex {
    private pokemons: Pokemon[] = [];   // Array de Pokemons

    setPokemon(pokemon: Pokemon): void {
        this.pokemons.push(pokemon);
    }

    //Buscar por tipo de Pokemon
    buscarPokemon(criterio: string): string {
        const pokemon = this.pokemons.find(pokemon => pokemon.getTipo() === criterio);
        return `${pokemon?.getNombre()} - Tipo: ${pokemon?.getTipo()} - HP: ${pokemon?.getHp()}`;
    }

    //Mostrar todos los Pokemons
    mostrarTodos(): void {
        this.pokemons.forEach(pokemon => {
            console.log(`${pokemon.getNombre()} - Tipo: ${pokemon.getTipo()} - HP: ${pokemon.getHp()}`);
        });
    }
}


/**
 * Clase Combat
 *
 * @export  Combat necesario para simular el combate entre dos Pokemons
 * @class Combat donde se simula el combate entre dos Pokemons
 */
export class Combat {
    // Atributos de la clase Combat
    constructor(private pokemon1: Pokemon, private pokemon2: Pokemon) {}

    // Método para calcular el daño que un Pokemon inflige a otro
    calcularDaño(atacante: Pokemon, defensor: Pokemon): number {
        const efectividadMap: Record<string, Record<string, number>> = {
            fuego: { hierba: 2, agua: 0.5, eléctrico: 1 },
            agua: { fuego: 2, hierba: 0.5, eléctrico: 0.5 },
            hierba: { agua: 2, fuego: 0.5, eléctrico: 1 },
            eléctrico: { agua: 2, fuego: 1, hierba: 1 },
        };

        const efectividad = efectividadMap[atacante.getTipo()]?.[defensor.getTipo()] ?? 1;
        return 50 * (atacante.getAtaque() / defensor.getDefensa()) * efectividad;
    }

    start(): string {
        let atacante = this.pokemon1;
        let defensor = this.pokemon2;
        let turno = 1;

        while (this.pokemon1.getHp() > 0 && this.pokemon2.getHp() > 0) {
            const daño = this.calcularDaño(atacante, defensor);
            defensor.recibirDaño(daño);

            console.log(`Turno ${turno}: ${atacante.getNombre()} ataca a ${defensor.getNombre()} infligiendo ${daño.toFixed(2)} de daño.`);
            console.log(`${defensor.getNombre()} tiene ${defensor.getHp()} HP restantes.`);

            if (defensor.getHp() === 0) break;

            [atacante, defensor] = [defensor, atacante]; // Intercambia atacante y defensor
            turno++;
        }

        return `${atacante.getNombre()} ha ganado el combate!`;
    }
}

