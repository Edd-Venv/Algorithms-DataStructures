// Implement Linear Search Algorithms that search a provided Array for the provided value.
// The Linear Search Algorithms will either return a boolean, index, or value back.

// const foods = ["pizza", "orange", "yogurt"];
// linearSearchIndexOf(foods, "pizza") --> 0
// linearSearchIncludes(foods, "pizza") --> true
// linearSearchFind(foods, food => food === "pizza") --> "pizza"

/*
Linear Time Complexity is the best we can do for an unsorted array.
*/

function linearSearchIndexOf(arr, val) {
  "use strict";

  for (let i = 0; i < arr.length; i++) {
    const searchedValue = val;
    const arrayValue = arr[i];

    if (searchedValue === arrayValue) {
      return i;
    }
  }

  return -1;
}
//Time Complexity = O(n);
//Space Complexity = O(n);

function linearSearchIncludes(arr, val) {
  "use strict";

  for (let j = 0; j < arr.length; j++) {
    const searchedValue = val;
    const arrayValue = arr[j];

    if (searchedValue === arrayValue) {
      return true;
    }
  }

  return false;
}
//Time Complexity = O(n);
//Space Complexity = O(n);

function linearSearchFind(arr, cb) {
  "use strict";
  const callback = cb;

  for (let i = 0; i < arr.length; i++) {
    const arrayValue = arr[i];

    if (callback(arrayValue) === true) {
      return arrayValue;
    }
  }

  return undefined;
}
//Time Complexity = O(n);
//Space Complexity = O(n);

mocha.setup("bdd");
const { assert } = chai;

const foods = ["pizza", "orange", "yogurt"];
const people = [{ name: "Kevin", last: "Nguyen", born: 1995 }];

describe("linearSearchIndexOf()", () => {
  it("returns index of found item", () => {
    assert.equal(linearSearchIndexOf(foods, "pizza"), 0);
    assert.equal(linearSearchIndexOf(foods, "yogurt"), 2);
  });
  it("returns -1 if item not found", () => {
    assert.equal(linearSearchIndexOf(foods, "laptop"), -1);
  });
});

describe("linearSearchIncludes()", () => {
  it("returns true if item found", () => {
    assert.equal(linearSearchIncludes(foods, "pizza"), true);
  });
  it("returns false if item NOT found", () => {
    assert.equal(linearSearchIncludes(foods, "laptop"), false);
  });
});

describe("linearSearchFind()", () => {
  it("returns item back if found", () => {
    const kevin = people[0];
    assert.equal(
      linearSearchFind(people, person => person.name === "Kevin"),
      kevin
    );
  });
  it("returns undefined if item NOT found", () => {
    assert.equal(
      linearSearchFind(people, person => person.name === "Kevinn"),
      undefined
    );
  });
});

mocha.run();
