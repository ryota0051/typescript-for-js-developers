export {};

// 名前あり関数の場合
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  return typeof value === 'number' ? value * 2 : value + value;
}

// アロー関数の場合

// type Double = {
//   (value: number): number;
//   (value: string): string;
// };

// let double: Double = (value: any): any => {
//   return typeof value === 'number' ? value * 2 : value + value;
// };

console.log(double(100));
console.log(double('GO '));
// console.log(double(true));
