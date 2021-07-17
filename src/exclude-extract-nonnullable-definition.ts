export {};

// exclude
type MyExclude<> = never | never | DebugType;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

// extract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// nonNullable
type NullabeTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullabeTypes>;
