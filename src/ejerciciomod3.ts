import { Arithmeticable, Complex } from "./ejerciciomod.js";
import {Rational} from "./ejerciciomod2.js"

// Adapter class that makes SystemA to understand the interface of SystemB
export class Adapter extends Complex {
    constructor(private service: Rational) {
      super(service.getNumerator() / service.getDenominator(), 0);
    }
}