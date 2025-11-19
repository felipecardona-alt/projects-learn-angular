// Decorator is a function that will receive the class as a parameter property
// Decorator son funciones que modifican el comportamiento de una clase, propiedades y metodos
function classDecorator<T extends {new (...args:any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty: string = 'New Property';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'Hello World';

    print() {
        console.log('Hola Mundo');
    }
}

console.log( '---- Decorators ----' );
console.log( SuperClass );

const myClass = new SuperClass();
console.log( myClass.myProperty );
myClass.print();