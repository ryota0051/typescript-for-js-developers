export {};

let name: any = 'name';

// let length = (<string>name).length; // こちらは非推奨
let length = (name as string).length; // こちらが望ましい

length = 3;
