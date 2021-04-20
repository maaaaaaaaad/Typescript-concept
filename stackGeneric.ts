{
  // modified stack.ts generic version.

  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    // wrap value for StackNode is requirement readonly
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0; // readonly : Not modify inside
    private head?: StackNode<T>;

    constructor(private capacity: number) {} // basically, requirement the capacity

    get size() {
      return this._size;
    }

    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("Stack is full");
      }
      const node: StackNode<T> = { value: value, next: this.head }; // omit "StackNode<T>"
      this.head = node;
      this._size++;
    }
    pop(): T {
      // if T | undefine => need check the "null" (no recommand)
      if (this.head == null) {
        // null == undefine (true) , null === undefine (false),
        //if (this.head === undefine) : would be pass the code line so excute next code. recommanded "== null"
        throw new Error("Stack is empty!");
      }
      const node = this.head;
      this.head = node.next; // head has value & next. next has StackNode
      this._size--;
      return node.value; // pop() must be return. so pop() has "T" type.
    }
  }

  const stack1 = new StackImpl<number>(10); // 10 is cpapcity
  stack1.push(1);
  stack1.push(2);
  stack1.push(3);
  while (stack1.size !== 0) {
    console.log(stack1.pop());
  }

  const stack2 = new StackImpl<string>(10);
  stack2.push("WOONG");
  stack2.push("DONG");
  stack2.push("OH");
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }

  // if not input generic type (ex. new StackImpl<>) : type has undefined. it is too baaaad🖕🏻.
}
