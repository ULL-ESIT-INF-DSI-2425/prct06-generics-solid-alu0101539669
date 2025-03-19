"use strict";
// Desarrolle los siguientes ejercicios en su proyecto TypeScript asociado a la práctica y empuje los cambios al repositorio GitHub correspondiente, una vez haya finalizado:
// Diseñe una interfaz genérica Arithmeticable, que defina los siguientes métodos con los que debería contar una clase que implemente dicha interfaz genérica: add, substract, multiply, divide.
// Diseñe una clase genérica ArithmeticableCollection cuyo parámetro de tipo genérico T se encuentre restringido a la forma definida por la interfaz Arithmeticable. Dicha clase genérica deberá contar, al menos, con los métodos addArithmeticable (añadir un elemento a la colección), getArithmeticable (obtener un elemento de la colección) y getNumberOfArithmeticables (obtener el tamaño de la colección), además de con un array de elementos cuyo tipo sea T.
// Implemente una clase ComplexNumber que implemente la interfaz Arithmeticable.
// Cree instancias de la clase genérica 'ArithmeticableCollection' a partir de su clase Complex y demuestre su correcto funcionamiento.
// Trate de respetar los principios SOLID en su diseño de clases e interfaces. Recuerde que deberá incluir la documentación haciendo uso de comentarios TSDoc, así como implementar pruebas unitarias a través de Vitest. Genere, también, un informe de cubrimiento del código haciendo uso de esta herramienta. Implemente flujos de trabajo GitHub para llevar llevar a cabo integración continua y subir los datos de cubrimiento a Coveralls. Como entrega de esta tarea deberá indicar el enlace al repositorio GitHub con los ejercicios solicitados.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complex = exports.ArithmeticableCollection = void 0;
/**
 * Clase ArithmeticableCollection
 */
class ArithmeticableCollection {
    _elements = [];
    /**
     * Metodo que añade un elemento al array
     * @param element
     */
    addArithmeticable(element) {
        this._elements.push(element);
    }
    /**
     * Metodo que devuelve el elemento que se encuentra
     * @param index es el indice que se le pasa para que devuelva el valor
     * @returns elemento que encuentra
     */
    getArithmeticable(index) {
        return this._elements[index];
    }
    /**
     * Metodo que obtiene el tamaño de la colección
     * @returns
     */
    getNumbeOfArithmeticables() {
        return this._elements.length;
    }
}
exports.ArithmeticableCollection = ArithmeticableCollection;
/**
 * Clase Complex
 */
class Complex {
    //Declaracion de los parametros
    _real;
    _imaginary;
    /**
     * Constructor de la clase
     * @param real parte real
     * @param imaginary
     */
    constructor(real, imaginary) {
        this._real = real;
        this._imaginary = imaginary;
    }
    get RealNumber() {
        return this._real;
    }
    get ImaginaryNumber() {
        return this._imaginary;
    }
    add(operando) {
        let real = this._real + operando.RealNumber;
        let imaginary = this._imaginary + operando.ImaginaryNumber;
        let result = new Complex(real, imaginary);
        return result;
    }
    substract(operando) {
        let real = this._real - operando.RealNumber;
        let imaginary = this._imaginary - operando.ImaginaryNumber;
        let result = new Complex(real, imaginary);
        return result;
    }
    multiply(operando) {
        let real = (this._real * operando.RealNumber) - (this._imaginary * operando.ImaginaryNumber);
        let imaginary = (this._real * operando.ImaginaryNumber) + (this._imaginary * operando.RealNumber);
        let result = new Complex(real, imaginary);
        return result;
    }
    divide(operando) {
        let result1 = ((this._real * operando.RealNumber) + (this._imaginary * operando.ImaginaryNumber)) / (Math.pow(operando.RealNumber, 2) + Math.pow(operando.ImaginaryNumber, 2));
        let result2 = ((this._imaginary * operando.RealNumber) - (this._real * operando.ImaginaryNumber)) / (Math.pow(operando.RealNumber, 2) + Math.pow(operando.ImaginaryNumber, 2));
        let result = new Complex(result1, result2);
        return result;
    }
}
exports.Complex = Complex;
