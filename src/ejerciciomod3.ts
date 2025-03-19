import { Arithmeticable, Complex } from "./ejerciciomod";
import {Rational} from "./ejerciciomod2"

// Adapter class that makes SystemA to understand the interface of SystemB
export class Adapter extends Complex {
    constructor(private service: Rational) {
      super(service.getNumerator() / service.getDenominator(), 0);
    }
}