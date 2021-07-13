export {};

interface Profile {
  underTwenty: boolean;
  name: string;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'p', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex]: typeForValue }

profile.name = 'name';
profile.age = 43;
profile.nationality = 'Japan';
