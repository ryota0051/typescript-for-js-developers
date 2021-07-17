export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('taro', 30);

console.log(taro);

type PerosonType = typeof Person;

type Profile = ConstructorParameters<PerosonType>;

const profile: Profile = ['jiro', 55];
const jiro = new Person(...profile);

console.log(jiro);

type MyConstructorParameters<T extends new (...args: any) => any> =
  T extends new (...args: infer P) => any ? P : never;
