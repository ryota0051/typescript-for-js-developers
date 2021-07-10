export {};

const weeks = ['日', '月', '火', '水', '木', '金'] as const;
type Weeks = typeof weeks[number];

let dayOfTheWeek: Weeks = '日';
dayOfTheWeek = '月';
// dayOfTheWeek = '31';

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
let month: typeof months[number] = 1;
month = 12;
// month = 13;

let TRUE: true = true;
// TRUE = false;

const animals = ['cat', 'dog', 'mouse'] as const;
type Animal = typeof animals[number];
