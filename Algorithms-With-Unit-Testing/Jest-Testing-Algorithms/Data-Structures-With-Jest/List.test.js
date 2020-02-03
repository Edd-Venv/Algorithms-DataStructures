//Uses an empty Array to store list elements.

class List {
  constructor() {
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
    this.length = length;
    this.clear;
    this.append;
    this.toString;
    /*
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElment = getElment;
    this.contains = contains;*/
  }
  clear() {
    if (this.dataStore === []) {
      return true;
    }
    this.dataStore = [];
    this.length = this.pos = this.listSize = 0;
    return true;
  }

  append(data) {
    this.dataStore[this.length++] = data;
    return true;
  }

  toString() {
    if (this.length === 0) {
      return;
    }
    return this.dataStore;
  }

  getElement() {}
}

describe("List Data Structure", () => {
  it("APPEND Should Add An Element To The DataStore", () => {
    const ListDS = new List();
    ListDS.append(5);
    ListDS.append(10);
    const length = ListDS.length - 1;
    const lastElement = ListDS.dataStore[length];

    expect(lastElement).toEqual(10);
  });

  it("CLEAR Should empty the List", () => {
    const ListDS = new List();
    ListDS.append(10);
    ListDS.clear();

    expect(ListDS.length).toBe(0);
    expect(ListDS.dataStore).toEqual([]);
    expect(ListDS.clear()).toBe(true);
  });

  it("ToSTRING Should return a string representation of the List", () => {
    const ListDS = new List();
    ListDS.append("Hey");
    ListDS.append("We on");

    const listString = ListDS.toString();
    expect(listString).toEqual([
      expect.stringMatching("Hey"),
      expect.stringMatching("We on")
    ]);
  });

  it("");
});
