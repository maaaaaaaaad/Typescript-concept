function checkNotNull(arg: number | null): number {
  if (arg == null) {
    throw new Error("Not vaild number");
  }
  return arg;
}
const result = checkNotNull(10); // return Error & checked only number it is too bad 🖕🏻

// just one solution 👇🏻 but any is too baaaaaad
function checkNotTheNull(arg: any | null): any {
  if (arg == null) {
    throw new Error("Not vaild any types");
  }
  return arg;
}
const anything = checkNotTheNull(23); // return 123 & is cool. but any is no present to type. too bad 🖕🏻

// only solution generic ! awesome ❤️ <GENERIC> has any text , template function generic<T>(...) : T {...}
function checkType<GENERIC>(arg: GENERIC | null): GENERIC {
  if (arg == null) {
    throw new Error("Not vaild GENERIC types");
  }
  return arg;
}
const number: number = checkType(11);
const string: string = checkType("string"); // compiling stpe for define type
const boolean: boolean = checkType(true);
