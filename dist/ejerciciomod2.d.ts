import { Arithmeticable } from "./ejerciciomod";
export declare class Rational implements Arithmeticable<Rational> {
    private _numerator;
    private _denominator;
    /**
     * Constructor de la clase Rational
     * @param numerator
     * @param denominator
     */
    constructor(numerator: number, denominator: number);
    /**
     * Metodo para obtener el numerador
     * @returns  numerador de la clase
     */
    getNumerator(): number;
    /**
     * Metodo para obtener el denominador
     * @returns  denominador de la clase
     */
    getDenominator(): number;
    /**
     * Metodo para sumar dos numeros racionales
     * @param operando  Racional
     * @returns nuevo racional sumado
     */
    add(operando: Rational): Rational;
    /**
     * Metodo para restar dos numeros racionales
     */
    substract(operando: Rational): Rational;
    /**
     * Metodo para dividir dos numeros racionales
     * @param operando
     * @returns
     */
    divide(operando: Rational): Rational;
    /**
     * Metodo para multiplicar dos numeros racionales
     * @param operando
     * @returns
     */
    multiply(operando: Rational): Rational;
}
