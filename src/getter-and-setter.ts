export {};

// * owner
//   * 所有者
//   * 初期化時に設定可能
//   * 途中で変更不可
//   * 参照可能
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる。
//   * 途中で変更できる。
//   * 参照できない。

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
  debugPring() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('山田', 123456789);
// 読み込み専用なので代入不可
// card.owner = 'test';
console.log(card.owner);

console.log(card.debugPring());
card.secretNumber = 11111111111;
console.log(card.debugPring());
// card.secretNumber;
// card._secretNumber;
// console.log(card.secretNumber);
