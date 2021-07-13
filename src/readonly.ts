export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('山田');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'other name';
