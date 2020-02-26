//const util = require("util");

class Node {
  constructor(data, next, previous) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  unshift(data) {
    if (this.head === null) {
      const newHead = new Node(data, null, null);

      this.head = newHead;
      this.length++;
    } else if (this.head !== null) {
      const newHead = new Node(data, this.head, null);

      this.head.previous = newHead;
      this.head = newHead;
      this.length++;
    }
  }

  getLast() {
    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode.previous;
  }

  shift() {
    if (!this.head) {
      return;
    }
    const oldHead = this.head;
    this.head = this.head.next;
    this.head.previous = null;
    this.length--;
    return oldHead;
  }

  push(data) {
    if (!this.head) {
      return this.unshift(data);
    }

    const last = this.getLast();
    last.next = new Node(data, null, last.previous);
    this.length++;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }
}

describe("DOUBLY LINKED-LIST", () => {
  it("UNSHIFT() Should Add A New Node At The Start", () => {
    const DLlist = new DoublyLinkedList();
    DLlist.unshift(3);
    DLlist.unshift(2);
    DLlist.unshift(1);

    expect(DLlist).toHaveProperty("head.next.data", 2);
    expect(DLlist).toHaveProperty("head.next.next.next", null);
    expect(DLlist).toHaveProperty("head.next.previous.data", 1);
    expect(DLlist).toHaveProperty("head.next.next.data", 3);
    expect(DLlist).toHaveProperty("head.next.next.previous.data", 2);
    expect(DLlist).toHaveProperty("head.previous", null);
    expect(DLlist).toHaveProperty("length", 3);
  });

  it.skip("GETLAST() Should Return The Last Node", () => {
    const DLlist = new DoublyLinkedList();
    DLlist.unshift(3);
    DLlist.unshift(2);
    DLlist.unshift(1);
    console.log(DLlist.getLast());
    expect(DLlist.getLast()).toMatchObject({
      data: 3,
      next: null,
      previous: [Circular]
    });
  });
});
