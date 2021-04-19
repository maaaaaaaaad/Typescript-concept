type contentInfo = {
  provideShot: number;
  price: number;
  waitting: number;
  difference: number;
};

class CoffeeProvider {
  private static defaultShot: number = 1;
  private static needPrice: number = 4000;
  static defaultWait: number = 30;

  static coffeeInformations(pay: number): contentInfo {
    if (pay < CoffeeProvider.needPrice) {
      throw new Error("Not enough pay!");
    } else {
      return {
        provideShot: CoffeeProvider.defaultShot,
        price: CoffeeProvider.needPrice,
        waitting: CoffeeProvider.defaultWait,
        difference: pay - CoffeeProvider.needPrice,
      };
    }
  }
}
const userCoffee = CoffeeProvider.coffeeInformations(4000);
console.log(userCoffee);

//getter & setter : read & write

class UserInformaition {
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  private internalAge = 0;

  get throwAge(): number {
    return this.internalAge;
  }

  set throwAge(num: number) {
    if (num < 0) {
      throw new Error("Error!");
    }
    this.internalAge = num;
  }

  constructor(private firstName: string, private lastName: string) {}
}

const user = new UserInformaition("DONG WOONG", "OH");
const userInfo = user.fullName;
let setAge = user.throwAge;
setAge = 10;
console.log(setAge);
