{
  type Check<T> = T extends string ? boolean : number;
  type StringType = Check<string>; // type StringType = boolean
  type NumberType = Check<number>; // type NumberType = number
  type NameType = Check<"Dolce">; // type NameType = boolean, because by type inference
  type AgeType = Check<13>; // type AgeType = number

  type FunctionOrObject<T> = T extends Function ? "function" : "object";
  type ObjType = FunctionOrObject<{}>; // type ObjType = 'object'
  type FunType = FunctionOrObject<() => void>; // type FunType = 'function'

  //causion! ⚠//
  type ObjectOrFunction<T> = T extends object ? object : Function;
  type ObType = ObjectOrFunction<object>; //type ObType = object
  type FnType = ObjectOrFunction<() => void>; // type FnType = object
  //Because Type Object > function
}
