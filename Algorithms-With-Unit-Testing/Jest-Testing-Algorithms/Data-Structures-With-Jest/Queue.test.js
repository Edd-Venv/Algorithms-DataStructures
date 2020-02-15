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
    return this.dataStore.shift();
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

    expect(queue.dequeue()).toBe(1);
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
const joinNames = (maleDancer, femaleDancer) => {
  if (maleDancer && femaleDancer) {
    const joinedNames = `${maleDancer} And ${femaleDancer}`;
    return joinedNames;
  }
};
const trimGender = name => {
  let fullName = "";
  for (let i = 2; i < name.length; i++) {
    fullName += name[i];
  }
  return fullName;
};

function pairs(arr) {
  const maleDancers = new Queue();
  const femaleDancers = new Queue();
  const dancers = new Queue();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === "M") {
      maleDancers.enqueue(trimGender(arr[i]));
    } else if (arr[i][0] === "F") {
      femaleDancers.enqueue(trimGender(arr[i]));
    }
  }

  while (!maleDancers.empty() | !femaleDancers.empty()) {
    dancers.enqueue(joinNames(maleDancers.dequeue(), femaleDancers.dequeue()));
  }
  console.log(maleDancers);
  console.log(femaleDancers);
  console.log(dancers);
  return dancers.toString();
}

describe("DANCER QUEUE", () => {
  it("Should Return A List Of Paired Male And Female Dancers", () => {
    const dancersArr = [
      "F Allison McMillan",
      "M Frank Opitz",
      "M Mason McMillan",
      "M Clayton Ruff",
      "F Cheryl Ferenback",
      "M Raymond Williams",
      "F Jennifer Ingram",
      "M Danny Martin",
      "F Aurora Adney"
    ];
    expect(pairs(dancersArr)).toMatch(
      "\nFrank Opitz And Allison McMillan\nMason McMillan And Cheryl Ferenback\nClayton Ruff And Jennifer Ingram\nRaymond Williams And Aurora Adney"
    );
  });
});
