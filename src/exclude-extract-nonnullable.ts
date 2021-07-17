export {};

// exclude
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludinFunction = Exclude<SomeTypes, Function>;

// extract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// nonNullable
type NullabeTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullabeTypes>;
