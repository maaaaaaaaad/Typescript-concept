{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("Full time job!!");
    }

    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log("Part Time job!!");
    }

    workPartTime() {}
  }

  // 👇🏻 really really bad function, return employee => no memorize Full(Part)TimeEmployee informations
  // function employeePay(employee: Employee): Employee {
  //   employee.pay();
  //   return employee;
  // }

  // 👇🏻 just only solution, implement generic function
  function employeePay<T extends Employee>(employee: T): T {
    // this case is require "extends" !! it is saying "No anything vaild!"
    // or const employee = <T extends Employee>(employee: T): T {...}
    employee.pay();
    return employee;
  }

  const woong = new FullTimeEmployee();
  const dong = new PartTimeEmployee();

  const woongAfterPay = employeePay(woong);
  const dongAfterPay = employeePay(dong);
  // generic has constrain type ! for example <T>:all type, <T extends Employee>: Employee type
  // ------------------------------------------------------------------------------------------

  // implement "console.log(getValue(obj , value))" ex: getValue(information, name) // Dolce

  const information = {
    name: "Dolce",
    age: 13,
    address: "integral5137@gmail.com",
  };

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const resultName = getValue(information, "name");
  const resultAddress = getValue(information, "address");
  const resultAge = getValue(information, "age");
}
