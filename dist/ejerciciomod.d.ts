/**
 * Interface generica Arithmeticable
 */
export interface Arithmeticable<T> {
    /**
     * Metodo de suma
     * @param operando1
     */
    add(operando1: T): T;
    /**
     * Metodo de resta
     * @param operando1
     */
    substract(operando1: T): T;
    /**
    * Metodo de resta
    * @param operando1
    */
    multiply(operando1: T): T;
    /**
    * Metodo de resta
    * @param operando1
    */
    divide(operando1: T): T;
}
/**
 * Clase ArithmeticableCollection
 */
export declare class ArithmeticableCollection<T extends Arithmeticable<T>> {
    private _elements;
    /**
     * Metodo que añade un elemento al array
     * @param element
     */
    addArithmeticable(element: T): void;
    /**
     * Metodo que devuelve el elemento que se encuentra
     * @param index es el indice que se le pasa para que devuelva el valor
     * @returns elemento que encuentra
     */
    getArithmeticable(index: number): T;
    /**
     * Metodo que obtiene el tamaño de la colección
     * @returns
     */
    getNumbeOfArithmeticables(): number;
}
/**
 * Clase Complex
 */
export declare class Complex implements Arithmeticable<Complex> {
    private _real;
    private _imaginary;
    /**
     * Constructor de la clase
     * @param real parte real
     * @param imaginary
     */
    constructor(real: number, imaginary: number);
    get RealNumber(): number;
    get ImaginaryNumber(): number;
    add(operando: Complex): Complex;
    substract(operando: Complex): Complex;
    multiply(operando: Complex): Complex;
    divide(operando: Complex): Complex;
}
