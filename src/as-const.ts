export {};

let name = 'name';

name = 'other name';

let nickname = 'p' as const;
nickname = 'p';

let profile = {
  name: 'name',
  height: 158,
} as const;

// profile.name = 'name2';
// profile.height = 190;
