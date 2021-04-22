{
  //For example in an object...
  const arr = {
    name: "woong",
    age: "20",
    hobby: "coding",
  };

  const seachName = arr["name"];
  console.log(seachName); // woong

  //--------------------------------------------------------------------------------

  type Animal = {
    name: string;
    age: number;
    address: string;
  };

  type Name = Animal["name"];
  const dolce: Name = "Dolce";
  console.log(dolce);

  type Age = Animal["age"];
  const dolceAge: Age = 13;
  console.log(dolceAge);

  type Address = Animal["address"];
  const dolceAddress: Address = "intergral5137@gmail.com";
  console.log(dolceAddress);

  const dolceSet = {
    name: dolce,
    age: dolceAge,
    address: dolceAddress,
  };
  console.log(dolceSet);
  console.log(dolceSet["name"]);

  // Additionally..
  type Keys = keyof Animal; // type Keys = "name" | "age" | "address". it's union type
}
