export {};

type str = string;

const fooString: string = 'Hello';
const barString: str = 'Hello';

const example1 = {
  name: 'test',
  age: 28,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'test',
  age: 28,
};

type Profile2 = typeof example1;
