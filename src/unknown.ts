export {};

const func = (): number => 43;

let numberAny: any = func();
let numberUnkown: unknown = func();

let sumAny = numberAny + 10;
if (typeof numberUnkown === 'number') {
  let sumUnkown = numberUnkown + 10;
  console.log({ sumUnkown });
}
