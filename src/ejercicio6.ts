// Ejercicio 6 - No todos los pájaros vuelan
// Suponga la siguiente jerarquía de clases para modelar diferentes tipos de aves:

// class Bird {
//   fly(): void {
//     console.log("Flying...");
//   }
// }

// class Sparrow extends Bird {}

// class Penguin extends Bird {}
// El principal problema de lo anterior es que un pingüino no puede volar.

// ¿Qué principio SOLID se estaría violando en este caso? ¿Cómo rediseñaría la jerarquía de clases anterior para respetar dicho principio?

// Se estaría violando el principio de Liskov Substitution Principle (LSP). Para respetar este principio, se puede rediseñar la jerarquía de clases de la siguiente manera:

// Crear una interfaz Flyable que contenga el método fly().
// Hacer que la clase Bird implemente la interfaz Flyable.
// Crear una clase abstracta FlyingBird que extienda de Bird e implemente Flyable.
// Hacer que Sparrow extienda de FlyingBird.
// Hacer que Penguin extienda de Bird pero no de FlyingBird.
// A continuación se muestra una posible solución que cumple con LSP:

interface Flyable {
    fly(): void;
  }
  
  class Bird implements Flyable {
    fly(): void {
      console.log("Flying...");
    }
  }
  
  abstract class FlyingBird extends Bird {
    fly(): void {
      console.log("Flying...");
    }
  }
  
  class Sparrow extends FlyingBird {}
  
  class Penguin extends Bird {
    fly(): void {
      console.log("I cannot fly...");
    }
  }
  
  // Client code
  const sparrow = new Sparrow();
  sparrow.fly();
  
  const penguin = new Penguin();
  penguin.fly();