// Given an integer, return an integer with the digits
// reversed.
// --- Examples
//   reverseInt(13) === 31
//   reverseInt(404) === 404
//   reverseInt(100) === 1
//   reverseInt(-13) === -31
//   reverseInt(-100) === -1

function reverseInt(n) {
  "use strict";
  /*let numbers = [];
  for (let i = n.length; i >= 0; i--) {
    numbers.push(n[i]);
  }
  console.log(numbers);
  let intRegex = /-?\d{1,}/g;
  console.log(n.match(intRegex));
  return null;
  if ((n[i] !== "0") | (numbers.length > 0)) {
      numbers += n[i];
      if (n[i] == "-") {
        numbers[0] = "-";
      }
    }
    //console.log(numbers);

  */
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
  for (let i = 0; i < numbers.length; i++) {
    finalNumbers += numbers[i];
  }
  console.log(finalNumbers);
  return parseInt(finalNumbers, 10);
}
reverseInt(1408);

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
