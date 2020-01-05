// Implement a Binary Search Algorithm that searches a Sorted Array
// for the provided value.
// The Binary Search Algorithm will return the index of value found, or -1 if not found.

/*
Binary Search only works on sorted Arrays, and is able to search that array much faster
than Linear Search due to the present.
*/
//Solution 1
const binarySearch = (sortedArr, value) => {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = sortedArr[mid];

    if (midVal === value) {
      return mid;
    } else if (midVal < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

//Solution 2
/*const binarySearch = (sortedArr, value) => {
  "use strict";
  if (sortedArr.length === 1) {
    if (sortedArr[0] !== value) {
      return -1;
    }
    return 0;
  } else {
    let middleIndex = sortedArr.length / 2;
    let middle = sortedArr[Math.floor(middleIndex)];

    if (value === middle) {
      return value;
    } else if (value > middle) {
      for (let i = middle; i < sortedArr.length; i++) {
        if (sortedArr[i] === value) {
          return i;
        }
      }
    } else if (value < middle) {
      for (let j = middle; j >= 0; j--) {
        if (sortedArr[j] === value) {
          return j;
        }
      }
    }
    return -1;
  }
};
*/

mocha.setup("bdd");
const { assert } = chai;

const sortedNumsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("binarySearch()", () => {
  it("returns correct index on sortedArray with just one number", () => {
    assert.equal(binarySearch([5], 5), 0);
    assert.equal(binarySearch([15], 5), -1);
  });
  it("works on sorted array with 10 numbers", () => {
    assert.equal(binarySearch(sortedNumsArray, 10), 10);
    assert.equal(binarySearch(sortedNumsArray, 0), 0);
    assert.equal(binarySearch(sortedNumsArray, 5), 5);
    assert.equal(binarySearch(sortedNumsArray, 7), 7);
    assert.equal(binarySearch(sortedNumsArray, 1337), -1);
  });
});

mocha.run();
