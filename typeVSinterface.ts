{
  // First.. interface is APIs, Type is DBtype repository.

  // type & interface with Class
  type User = {
    // using true (type is DBtype repository)
    name: string;
    age: number;
    address: string;
  };

  interface _User {
    // false using (interface is APIs)
    name: string;
    age: number;
    address: string;
  }

  interface _User {
    homeTown: string; //interface can be merged. but type can't be merged.
  }

  class UserInformation implements User {
    name: "Woong";
    age: 21;
    address: "integral5137@gmail.com";
  }

  class _UserInformation implements _User {
    name: "DONG WOONG OH";
    age: 25;
    address: "integral5137@firebase.com";
    homeTown: "Korea";
  }

  // type & interface Add contents
  type ZUser = User & { company: string };
  interface _ZUser extends _User {
    company: string;
  }

  // Only interface can be merged. but type alias can't be merged.
  // Only type alias can be computed properties and union type
  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female"; //type has union type
  };

  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"]; // string
  type Age = Person["age"]; // number
}
