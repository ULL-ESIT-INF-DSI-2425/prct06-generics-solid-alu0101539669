// Ejercicio 6 - No todos los pájaros vuelan
// Suponga la siguiente jerarquía de clases para modelar diferentes tipos de aves:
class Bird {
    fly() {
        console.log("Flying...");
    }
}
class FlyingBird extends Bird {
    fly() {
        console.log("Flying...");
    }
}
class Sparrow extends FlyingBird {
}
class Penguin extends Bird {
    fly() {
        console.log("I cannot fly...");
    }
}
// Client code
const sparrow = new Sparrow();
sparrow.fly();
const penguin = new Penguin();
penguin.fly();
