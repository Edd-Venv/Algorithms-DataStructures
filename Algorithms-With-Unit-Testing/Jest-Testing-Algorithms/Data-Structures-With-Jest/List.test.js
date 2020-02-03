//Uses an empty Array to store list elements.

class List {
  constructor() {
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
    this.length = length;
    //this.append = append;
    /*this.clear = clear;
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

  append(data) {
    this.dataStore[this.length] = data;
    this.length++;
    return true;
  }
}

describe("List Data Structure", () => {
  it("APPEND Should Add An Element To The DataStore", () => {
    const ListDS = new List();
    ListDS.append(5);
    ListDS.append(7);
    ListDS.append(10);
    const length = ListDS.length - 1;
    const lastElement = ListDS.dataStore[length];

    expect(lastElement).toEqual(10);
  });
});
