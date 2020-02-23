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
  length() {
    return this.dataStore.length;
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

//                                                  IMPLEMENTATION 1
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

  let remainingDancers;
  let queueWithLessDancers;
  if (femaleDancers.length <= maleDancers.length) {
    queueWithLessDancers = femaleDancers;
    remainingDancers = maleDancers;
  } else {
    queueWithLessDancers = maleDancers;
    remainingDancers = femaleDancers;
  }

  while (!queueWithLessDancers.empty()) {
    dancers.enqueue(joinNames(maleDancers.dequeue(), femaleDancers.dequeue()));
  }

  console.log(dancers.toString());

  if (!remainingDancers.empty()) {
    if (remainingDancers === maleDancers) {
      const remainingMaleDancers = remainingDancers.length();
      console.log(`The are ${remainingMaleDancers} Male Dancers Remaining!`);
    } else if (remainingDancers === femaleDancers) {
      const remainingFemaleDancers = remainingDancers.length();
      console.log(
        `The are ${remainingFemaleDancers} Female Dancers Remaining!`
      );
    }
  }

  return dancers.toString();
}

describe.skip("DANCER QUEUE", () => {
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

//                                                  IMPLEMENTATION 2(Radix Sort)

const toStringArr = arr => {
  let stringArr = [];

  for (let i = 0; i < arr.length; i++) {
    let stringNum = "";
    stringNum += arr[i];
    stringArr.push(stringNum);
    stringNum = "";
  }
  return stringArr;
};

function radixSort(arr) {
  arr = toStringArr(arr);
  const bin = {};
  const enqueueArr = new Queue();
  const finalArr = new Queue();

  // Sorting The Ones
  for (let i = 0; i < 10; i++) {
    bin[i] = [];
  }

  for (let j = 0; j < arr.length; j++) {
    bin[arr[j][1]].push(arr[j]);
  }

  for (let k = 0; k < arr.length; k++) {
    if (bin[k].length > 0) {
      for (let l = 0; l < bin[k].length; l++) {
        enqueueArr.enqueue(bin[k][l]);
      }
    }
  }

  //Sorting the Tens

  for (let i = 0; i < 10; i++) {
    bin[i] = [];
  }

  for (let j = 0; j < enqueueArr.length(); j++) {
    bin[enqueueArr.dataStore[j][0]].push(enqueueArr.dataStore[j]);
  }

  for (let k = 0; k < 10; k++) {
    if (bin[k].length > 0) {
      for (let l = 0; l < bin[k].length; l++) {
        finalArr.enqueue(parseInt(bin[k][l]));
      }
    }
  }

  return finalArr.dataStore;
}

describe.skip("RADIX SORT", () => {
  it("Should First Sort The 1s Then 10s Of The Array", () => {
    const arr = [91, 46, 85, 15, 92, 35, 31, 22];
    const arr2 = [45, 72, 93, 51, 21, 16, 70, 41, 27, 31];

    expect(radixSort(arr)).toEqual([15, 22, 31, 35, 46, 85, 91, 92]);
    expect(radixSort(arr2)).toEqual([16, 21, 27, 31, 41, 45, 51, 70, 72, 93]);
  });
});
