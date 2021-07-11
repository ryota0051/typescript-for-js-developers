export {};

// bmi(身長, 体重, console.logで出力するか？)
// bmi(1.5, 58, true);
// bmi(1.5, 58, flase);
// bmi(1.5, 58); => falseのときと同じ
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.58, 68);
