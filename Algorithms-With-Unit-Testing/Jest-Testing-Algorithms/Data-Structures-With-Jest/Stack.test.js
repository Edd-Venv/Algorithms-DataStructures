class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
    this.push;
    this.pop;
    this.peek;
    this.length;
  }

  length() {
    return this.top;
  }

  push(value) {
    this.dataStore[this.top++] = value;
  }

  shift() {
    if (this.top >= 0) {
      return this.dataStore[--this.top];
    }
  }

  peek() {
    if (this.top === 0) {
      return;
    }
    return this.dataStore[this.top - 1];
  }

  pop() {
    if (this.top < 2) {
      console.log("here");
      return this.shift();
    }
    if (this.top > 1) {
      const poppedValue = this.dataStore[this.top - 1];
      const newStack = new Stack();

      for (let i = 0; i < this.top - 1; i++) {
        newStack.push(this.dataStore[i]);
      }

      this.top--;
      this.dataStore = newStack.dataStore;

      return poppedValue;
    }
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

  it("SHIFT", () => {
    const StackDS = new Stack();
    StackDS.push(1);
    StackDS.push(2);
    StackDS.push(3);

    expect(StackDS.shift()).toBe(3);
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

    expect(StackDS.pop()).toBe(10);
    expect(StackDS.dataStore).toEqual([7, 8, 9]);
  });

  it.skip("Should Return Null If The Length Is 1", () => {
    const StackDS = new Stack();
    StackDS.push(11);
    StackDS.pop();
    expect(StackDS.dataStore).toEqual([11]);
    //expect(StackDS.pop()).toBeNull();
  });
});

// IMPLEMENTATION
function reverse(word) {
  let reverseStr = "";
  const stack = new Stack();

  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }
  for (let j = 0; j <= stack.top; j++) {
    reverseStr += stack.pop();
  }
  if (word === reverseStr) {
    return true;
  }
  console.log(reverseStr);
  return false;
}

describe("STACK IMPLEMENTATION", () => {
  it("Should Return True If Word Is A Palindrome.", () => {
    expect(reverse("racecar")).toBeTruthy();
  });
});
