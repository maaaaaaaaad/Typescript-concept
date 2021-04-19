interface Either {
  //left or right
  left: () => number;
  right: () => number;
}

class SimpleEither implements Either {
  constructor(private leftValue: number, private rightValue: number) {}

  left(): number {
    return this.leftValue;
  }

  right(): number {
    return this.rightValue;
  }
}

const either = new SimpleEither(5, 7);
const leftDirection = either.left();
const rightDirection = either.right();

console.log(leftDirection); // 5
console.log(rightDirection); // 7

//<-----------------------------Modify class from generic------------------------------>

interface LeftOrRight<L, R> {
  left: () => L;
  right: () => R;
}

class LRdirection<L, R> implements LeftOrRight<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}

  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const lr = new LRdirection(5, 10);
const firParameter = lr.left();
const secParameter = lr.right();

console.log(firParameter);
console.log(secParameter);
