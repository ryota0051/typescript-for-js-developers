export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('test', 28);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['name1', 32];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
