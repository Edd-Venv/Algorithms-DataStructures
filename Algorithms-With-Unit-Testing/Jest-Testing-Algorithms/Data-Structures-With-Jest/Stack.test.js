class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
    this.push;
    this.pop;
    this.peek;
  }

  push(value) {
    this.dataStore[this.top++] = value;
  }

  peek() {
    if (this.top === 0) {
      return;
    }
    return this.dataStore[this.top - 1];
  }

  pop() {
    if (this.top < 1) {
      return;
    }
    const newStack = new Stack();

    for (let i = 0; i < this.top - 1; i++) {
      newStack.push(this.dataStore[i]);
    }
    this.top--;
    return (this.dataStore = newStack.dataStore);
  }
}

describe("Stack Data Structure", () => {
  it("PUSH It Should Add A Value To The Top Of The Stack", () => {
    const StackDS = new Stack();
    StackDS.push(4);
    StackDS.push(5);
    StackDS.push(6);

    expect(StackDS.dataStore).toEqual([4, 5, 6]);
  });

  it("PEEK It Should Return The Value At The Top Of The Stack", () => {
    const StackDS = new Stack();
    StackDS.push(1);
    StackDS.push(2);
    StackDS.push(3);

    expect(StackDS.peek()).toBe(3);
  });

  it("POP Should Remove The Top Value", () => {
    const StackDS = new Stack();
    StackDS.push(7);
    StackDS.push(8);
    StackDS.push(9);
    StackDS.push(10);
    StackDS.pop();
    console.log(StackDS);

    expect(StackDS.dataStore).toEqual([7, 8, 9]);
  });
});
