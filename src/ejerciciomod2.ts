// Desarrolle los siguientes ejercicios en su proyecto TypeScript asociado a la práctica y empuje los cambios al repositorio GitHub correspondiente, una vez haya finalizado:

// Escriba una clase RationalNumber reutilizando parte del diseño que implementó durante la última práctica.
// Escriba un adaptador de racionales que le permita llevar a cabo operaciones aritméticas entre números complejos y números racionales.
// Haga uso de módulos ESM. Modifique los ficheros de configuración de su proyecto para lograr lo anterior.
// Recuerde que deberá incluir la documentación haciendo uso de TSDoc, así como incluir pruebas utilizando el framework de pruebas Vitest. También compruebe el nivel de cubrimiento de su código a través de Coveralls. Se valorará positivamente el hecho de comprobar la calidad del código fuente desarrollado a través de SonarQube. Como entrega de esta tarea deberá indicar, de nuevo, el enlace a dicho repositorio GitHub con los ejercicios solicitados.

import { Arithmeticable } from "./ejerciciomod.js";

export class Rational implements Arithmeticable<Rational> {
  private _numerator: number;
  private _denominator: number;

  /**
   * Constructor de la clase Rational
   * @param numerator 
   * @param denominator 
   */
  constructor(numerator: number, denominator: number) {
    this._numerator = numerator
    this._denominator = denominator
  }

  /**
   * Metodo para obtener el numerador
   * @returns  numerador de la clase
   */
  public getNumerator(): number {
    return this._numerator
  }

  /**
   * Metodo para obtener el denominador
   * @returns  denominador de la clase 
   */

  public getDenominator(): number {
    return this._denominator
  }

  /**
   * Metodo para sumar dos numeros racionales
   * @param operando  Racional
   * @returns nuevo racional sumado
   */
  add(operando: Rational): Rational{
    const numerador = this._numerator * operando.getDenominator() + operando.getNumerator() * this._denominator;
    const denominador = this._denominator * operando.getDenominator()
    return new Rational(numerador, denominador)
  }

  /**
   * Metodo para restar dos numeros racionales
   */
  substract(operando: Rational): Rational{
    const numerador1 = (this._numerator * operando.getDenominator()) - (operando.getNumerator() * this._denominator);
    const denominador1 = this._denominator * operando.getDenominator();
    return new Rational(numerador1, denominador1)
  }

  /**
   * Metodo para dividir dos numeros racionales
   * @param operando 
   * @returns 
   */
  divide(operando: Rational): Rational{
    const numerador2 = this._numerator * operando.getDenominator();
    const denominador2 = this._denominator * operando.getNumerator();
    return new Rational(numerador2, denominador2)
  }

  /**
   * Metodo para multiplicar dos numeros racionales
   * @param operando 
   * @returns 
   */
  multiply(operando: Rational): Rational{
    return new Rational(
      this._numerator * operando.getNumerator(),
      this._denominator * operando.getDenominator()
    )
  }
}

