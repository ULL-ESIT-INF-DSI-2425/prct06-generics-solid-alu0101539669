"use strict";
// Desarrolle los siguientes ejercicios en su proyecto TypeScript asociado a la práctica y empuje los cambios al repositorio GitHub correspondiente, una vez haya finalizado:
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rational = void 0;
class Rational {
    _numerator;
    _denominator;
    /**
     * Constructor de la clase Rational
     * @param numerator
     * @param denominator
     */
    constructor(numerator, denominator) {
        this._numerator = numerator;
        this._denominator = denominator;
    }
    /**
     * Metodo para obtener el numerador
     * @returns  numerador de la clase
     */
    getNumerator() {
        return this._numerator;
    }
    /**
     * Metodo para obtener el denominador
     * @returns  denominador de la clase
     */
    getDenominator() {
        return this._denominator;
    }
    /**
     * Metodo para sumar dos numeros racionales
     * @param operando  Racional
     * @returns nuevo racional sumado
     */
    add(operando) {
        const numerador = this._numerator * operando.getDenominator() + operando.getNumerator() * this._denominator;
        const denominador = this._denominator * operando.getDenominator();
        return new Rational(numerador, denominador);
    }
    /**
     * Metodo para restar dos numeros racionales
     */
    substract(operando) {
        const numerador1 = (this._numerator * operando.getDenominator()) - (operando.getNumerator() * this._denominator);
        const denominador1 = this._denominator * operando.getDenominator();
        return new Rational(numerador1, denominador1);
    }
    /**
     * Metodo para dividir dos numeros racionales
     * @param operando
     * @returns
     */
    divide(operando) {
        const numerador2 = this._numerator * operando.getDenominator();
        const denominador2 = this._denominator * operando.getNumerator();
        return new Rational(numerador2, denominador2);
    }
    /**
     * Metodo para multiplicar dos numeros racionales
     * @param operando
     * @returns
     */
    multiply(operando) {
        return new Rational(this._numerator * operando.getNumerator(), this._denominator * operando.getDenominator());
    }
}
exports.Rational = Rational;
