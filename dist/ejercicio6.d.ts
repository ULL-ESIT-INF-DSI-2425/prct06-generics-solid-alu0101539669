interface Flyable {
    fly(): void;
}
declare class Bird implements Flyable {
    fly(): void;
}
declare abstract class FlyingBird extends Bird {
    fly(): void;
}
declare class Sparrow extends FlyingBird {
}
declare class Penguin extends Bird {
    fly(): void;
}
declare const sparrow: Sparrow;
declare const penguin: Penguin;
