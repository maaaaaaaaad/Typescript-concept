interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  // wrap value for StackNode is requirement readonly
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0; // readonly : Not modify inside
  private head?: StackNode;

  get size() {
    return this._size;
  }

  push(value: string) {
    const node: StackNode = { value: value, next: this.head }; //value : value = value
    this.head = node;
    this._size++;
  }
  pop(): string {
    // if string | undefine => need check the "null" (no recommand)
    if (this.head == null) {
      // null == undefine (true) , null === undefine (false),
      //if (this.head === undefine) : would be pass the code line so excute next code. recommanded "== null"
      throw new Error("Stack is empty!");
    }
    const node = this.head;
    this.head = node.next; // head has value & next. next has StackNode
    this._size--;
    return node.value; // pop() must be return. so pop() has "string" type.
  }
}
