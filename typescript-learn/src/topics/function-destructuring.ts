export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 350.0
}

export interface TaxCalculationOptions {
    products: Product[];
    tax: number;
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const {tax, products} = options;

    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, resultTax] = taxCalculation({
    products: shoppingCart,
    tax
});

/* console.log('Total:', total);
console.log('Tax:', resultTax); */

export {};