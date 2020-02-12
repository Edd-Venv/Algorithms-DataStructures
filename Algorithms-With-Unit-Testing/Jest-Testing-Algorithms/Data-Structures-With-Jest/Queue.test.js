class Queue {
  constructor() {
    this.dataStore = [];
    this.enqueue;
    this.dequeue;
    this.front;
    this.back;
    this.toString;
    this.empty;
  }
  length() {
    return this.dataStore.length;
  }
  enqueue(element) {
    this.dataStore.push(element);
    return true;
  }

  dequeue() {
    if (this.length > 0) {
      this.dataStore.shift();
      return true;
    }
    return false;
  }
  front() {}
}
