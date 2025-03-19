"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapter = void 0;
const ejerciciomod_1 = require("./ejerciciomod");
// Adapter class that makes SystemA to understand the interface of SystemB
class Adapter extends ejerciciomod_1.Complex {
    service;
    constructor(service) {
        super(service.getNumerator() / service.getDenominator(), 0);
        this.service = service;
    }
}
exports.Adapter = Adapter;
