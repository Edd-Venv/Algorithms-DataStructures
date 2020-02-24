const importedQueue = require("./Queue.test.js");
const Queue = importedQueue.exportedQueue;

class priorityQueue {
  constructor() {
    this.dataStore = [];
    this.length;
    this.pEnqueue;
    this.pDequeue;
  }
  length() {
    return this.dataStore.length;
  }

  joinNameAndCode(name, code) {
    if (name && code) {
      const jointNameAndCode = `${code} ${name}`;
      return jointNameAndCode;
    }
  }

  selectPatient(arr) {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
      let patient = parseInt(arr[i][0]);
      let index = i;

      for (let j = i + 1; j < length; j++) {
        let nextPatient = parseInt(arr[j][0]);

        if (nextPatient < patient && nextPatient > 0) {
          patient = nextPatient;
          index = j;
        }
      }
      return index;
    }
    return false;
  }

  pEnqueue(name, code) {
    return this.dataStore.push(this.joinNameAndCode(name, code));
  }
  pDequeue() {
    return this.dataStore.splice(this.selectPatient(this.dataStore));
  }
}

describe("PRIORITY QUEUE", () => {
  it("Should Select The Right Patient", () => {
    const arr = ["3 luke", "1 Mack", "5 John", "4 Matthew"];
    const q = new priorityQueue();
    expect(q.selectPatient(arr)).toBe(1);
  });
  it("Should Remove Elements Based On A Priority Constraint", () => {
    const pQueue = new priorityQueue();
    pQueue.pEnqueue("luke", 3);
    pQueue.pEnqueue("Mack", 4);
    pQueue.pEnqueue("John", 1);
    pQueue.pDequeue();
    expect(pQueue.dataStore).toEqual(["3 luke", "4 Mack"]);
  });
  it("", () => {});
});

describe.skip("REQUIRE", () => {
  it("Should Import The Queue Class", () => {
    const test = new Queue();
    expect(test).toEqual({ dataStore: [] });
  });
});
