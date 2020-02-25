class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.find;
    this.insert;
    this.remove;
    this.display;
    this.unshift;
  }

  unshift(data) {
    const newHead = new Node(data, this.head);
    this.length++;
    this.head = newHead;
  }

  find(item) {
    let currentNode = this.head;
    while (currentNode.data != item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(data, item) {
    const current = this.find(item);
    const newNode = new Node(data, current.next);
    current.next = newNode;
    this.length++;
  }
}

describe("LINKED LIST", () => {
  it("UNSHIFT Should Add A Node At The begining Of The LinkedList", () => {
    const llist = new LinkedList();
    llist.unshift(1);
    llist.unshift(2);

    expect(llist).toHaveProperty("head.next.data", 1);
    expect(llist).toHaveProperty("length", 2);
  });

  it("FIND Should Search A Node Return It", () => {
    const llist = new LinkedList();
    llist.unshift(1);
    llist.unshift(2);

    expect(llist.find(1)).toMatchObject({ data: 1, next: null });
    expect(llist.find(2)).toMatchObject({
      data: 2,
      next: { data: 1, next: null }
    });
    expect(llist).toHaveProperty("length", 2);
  });

  it("INSERT Should Insert A New Node", () => {
    const llist = new LinkedList();
    llist.unshift(3);
    llist.unshift(1);
    llist.insert(2, 1);

    expect(llist).toHaveProperty("head.next.next.data", 3);
    expect(llist).toHaveProperty("length", 3);
  });
});
