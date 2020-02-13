class Queue {
  constructor() {
    this.dataStore = [];
    this.length;
    this.enqueue;
    this.dequeue;
    this.front;
    this.back;
    this.toString;
    this.empty;
  }

  enqueue(element) {
    this.dataStore.push(element);
    return true;
  }

  dequeue() {
    this.dataStore.shift();
    return true;
  }

  front() {
    this.dataStore[0];
  }

  back() {
    this.dataStore[this.length - 1];
  }

  toString() {
    let resultString = "";
    for (let i = 0; i < this.dataStore.length; i++) {
      resultString += "\n" + this.dataStore[i];
    }
    return resultString;
  }

  empty() {
    if (this.dataStore.length === 0) {
      return true;
    }
    return false;
  }
}

describe("QUEUE", () => {
  it("Should Enqueue To The DataStore", () => {
    const queue = new Queue();
    queue.enqueue(2);
    expect(queue.dataStore).toEqual([2]);
  });
  it("Should Dequeue The DataStore", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    expect(queue.dataStore).toEqual([2]);
  });
  it("Should Return A List Of The DataStore", () => {
    const queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.toString()).toMatch("\n3\n4\n5");
  });
});
//                                       IMPLEMENTATION 1

class dancerObject {
  constructor() {
    this.dataStore = {};
    this.length = length;
  }
  add(sex, name) {
    this.dataStore[name] = sex;
    this.length++;
  }
  length() {
    return this.dataStore.length;
  }
}

const tester = new dancerObject();
tester.add("m", "frank");
tester.add("m", "luke");
tester.add("f", "frank");
tester.add("f", "luke");
console.log(tester.dataStore["frank"]);
/*const dancer = (name, sex) => {
  name = name.toLowerCase();
  sex = sex.toLowerCase();

  const dancerObj = new dancerObject();
  dancerObj.add(name, sex);

  return dancerObj.dataStore;
};

console.log(dancer("luke", "M"));
*/
