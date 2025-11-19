import { taxCalculation, type Product, type TaxCalculationOptions} from "./function-destructuring";


const shoppingCart: Product[] = [
    { description: 'Nokia', price: 200.0 },
    { description: 'iPhone 12', price: 350.0 }
];


// Objeto declarado implicitamente.
const taxOptions: TaxCalculationOptions = {
    products: shoppingCart,
    tax: 0.20
};

// Uso del objeto de forma explícita.
const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.20
});

console.log('Total:', total);
console.log('Tax:', tax);