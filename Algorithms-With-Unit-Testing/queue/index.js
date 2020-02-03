// Create a queue data structure.  The queue should
// have methods 'enqueue' and 'dequeue' which add / remove
// elements from the queue AND also maintain 'first-in first-out'
// --- Examples
// const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// expect(q.dequeue()).toEqual(1);

class Queue {
  constructor() {
    this.data = [];
  }
  enqueue(val) {
    this.data.unshift(val);
  }
  dequeue() {
    return this.data.pop();
  }
}

mocha.setup("bdd");
const { assert } = chai;

describe("Queue", () => {
  it("enqueue and dequeue methods exist.", () => {
    const q = new Queue();
    q.enqueue(1);
    q.dequeue();
  });
  it("Queue has FIFO Behavior.", () => {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    assert.equal(q.dequeue(), 1);
    assert.equal(q.dequeue(), 2);
    assert.equal(q.dequeue(), 3);
  });
  it("dequeue returns null or undefined on empty queue.", () => {
    const q = new Queue();
    assert.equal(q.dequeue(), null);
  });
});

mocha.run();
