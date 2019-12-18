// --- Directions
// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.
// --- Examples
// chunk(["a", "b", "c", "d"], 2) --> [[ "a", "b"], ["c", "d"]]
// chunk([0, 1, 2, 3, 4, 5], 4) -->  [[0, 1, 2, 3], [4, 5]]

//Solution 1
/*function chunk(array, size) {
  "use strict";

  let finalArray = [[], []];

  for (let i = 0; i < size; i++) {
    finalArray[0].push(array[i]);
  }
  for (let i = size; i < array.length; i++) {
    finalArray[1].push(array[i]);
  }
  return finalArray;
}
//Time Complexity = O(N)
//Space Complexity = O(N)
*/

//Solution 2
/*
function chunk(array, size) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const last = res[res.length - 1];

    if (!last || last.length === size) {
      res.push([item]);
    } else {
      last.push(item);
    }
  }
  return res;
}
*/

mocha.setup("bdd");
const { assert } = chai;

describe("Array Chunking", () => {
  it("chunk() works", () => {
    let arr = ["a", "b", "c", "d"];
    let chunked = chunk(arr, 2);
    assert.deepEqual(chunked, [
      ["a", "b"],
      ["c", "d"]
    ]);

    arr = [0, 1, 2, 3, 4, 5];
    chunked = chunk(arr, 4);
    assert.deepEqual(chunked, [
      [0, 1, 2, 3],
      [4, 5]
    ]);
  });
});

mocha.run();
