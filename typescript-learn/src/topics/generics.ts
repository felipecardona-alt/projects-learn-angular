
export function whatsMyType<T>( argument: T ): T {
    return argument;
}

const stringValue = whatsMyType<string>( 'Hello World' );
const numberValue = whatsMyType<number>( 42 );
const booleanValue = whatsMyType<boolean>( true );

console.log( stringValue.toUpperCase() );
console.log( numberValue.toFixed(2) );
console.log( { stringValue, numberValue, booleanValue } );