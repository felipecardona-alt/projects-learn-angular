export interface Person {
  name: string;
  gender: Gender;
  age: number;
  address: string;
}

type Gender = 'male' | 'female';
