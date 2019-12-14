// Given an integer, return an integer with the digits
// reversed.
// --- Examples
//   reverseInt(13) === 31
//   reverseInt(404) === 404
//   reverseInt(100) === 1
//   reverseInt(-13) === -31
//   reverseInt(-100) === -1

//Solution 1

function reverseInt(n) {
  "use strict";
  n = n.toString();
  let numbers = [];
  let finalNumbers = "";
  for (let i = n.length - 1; i >= 0; i--) {
    if ((n[i] !== "0") | (numbers.length > 0)) {
      numbers.push(n[i]);
      if (n[i] == "-") {
        numbers.unshift("-");
        numbers.pop();
      }
    }
  }
  for (let j = 0; j < numbers.length; j++) {
    finalNumbers += numbers[j];
  }

  // let intRegex = /-?\d{1,}/g;
  //console.log(n.match(intRegex));

  return parseInt(finalNumbers, 10);
}
reverseInt(1408);

//Time Complexity = 2 * N or O(2N) => O(N)
//Space Complexity = O(N)

/*
//solution 2
function reverseInt(n) {
  let reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");
  reversed = parseInt(reversed);
  if (n < 0) {
    return reversed * -1;
  }
  return reversed;

  //Time Complexity: O(log N)
}*/

mocha.setup("bdd");
const { assert } = chai;

describe("Integer Reversal", () => {
  it("reverseInt() works on positive numbers", () => {
    assert.equal(reverseInt(3), 3);
    assert.equal(reverseInt(13), 31);
    assert.equal(reverseInt(100), 1);
    assert.equal(reverseInt(1408), 8041);
  });

  it("reverseInt() works on negative numbers numbers", () => {
    assert.equal(reverseInt(-3), -3);
    assert.equal(reverseInt(-13), -31);
    assert.equal(reverseInt(-100), -1);
    assert.equal(reverseInt(-1408), -8041);
  });
});

mocha.run();
