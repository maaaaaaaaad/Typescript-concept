//start enter user capsule

type makeCoffee = {
  order: string;
  count: number;
  differenceWater: number;
};

class CoffeMachine {
  private readonly coffeWater: number = 400;

  constructor(private capsuleCount: number, private needWater: number) {}
  makeSomeCoffee(): makeCoffee {
    if (this.capsuleCount <= 0 || this.needWater < 400) {
      throw new Error(
        `Does not enough capsule : ${this.capsuleCount} , water : ${this.needWater}`
      );
    }
    return {
      order: "watting...🕐",
      count: this.capsuleCount,
      differenceWater: this.needWater - this.coffeWater,
    };
  }
}

const coffeeMake = new CoffeMachine(1, 500);
const expresso = coffeeMake.makeSomeCoffee();
console.log(expresso);
