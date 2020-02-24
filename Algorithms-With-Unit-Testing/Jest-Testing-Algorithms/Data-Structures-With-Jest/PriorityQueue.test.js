const importedQueue = require("./Queue.test.js");
const Queue = importedQueue.exportedQueue;

describe("REQUIRE", () => {
  it("Should Import The Queue Class", () => {
    const test = new Queue();
    expect(test).toEqual({ dataStore: [] });
  });
});
