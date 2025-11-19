
export class Person {
/*     public name: string;
    private address: string; */
    constructor(
        public firstName: string, 
        private address: string = 'No address') {
    }
}


export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName);

    }
}


export class HeroUnique {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {}
}

const tonyStark = new Person('Tony Stark', 'New York');
// const ironman = new Hero('Ironman', 45, 'Tony Stark');
const ironman = new HeroUnique('Ironman', 45, 'Tony Stark', tonyStark);

console.log(ironman);