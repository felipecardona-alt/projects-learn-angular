function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`; // backtrick template to return a string
}

function multiplyNumbers(first: number, second?: number, base: number = 2): number {
    return first * base;
}

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
    action: () => void;
}

const healCharacter = (character:Character, amount:number) => {
    if(amount < 0) {
        throw new Error("Amount must be positive");
    }
    if (character.hp + amount > 100) {
        character.hp = 100;
        return;
    }
    character.hp += amount;
}

const dante: Character = {
    name: "Dante Sparda",
    hp: 75,
    showHp() {
        console.log(`The HP is: ${this.hp}`);
    },
    action() {
        console.log("JACKPOT!");
    }
}

healCharacter(dante, 20);
dante.showHp();
dante.action();

/* const result = addNumbers(1, 2);
const resultArrow = addNumbersArrow(1, 2);
const resultMultiply = multiplyNumbers(5);
console.log({ "Result Function": result, "Result Arrow": resultArrow, "Result Multiply": resultMultiply }); 
*/

export {};