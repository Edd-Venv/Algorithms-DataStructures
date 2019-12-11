// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'

//Solution 1
/*function reverse(str) {
  "use strict";
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

//Time/Space Complexity = O(n)
*/

// Solution 2
/*
function reverse(str) {
  "use strict";
  let reversedStr = [];

  for (let i = 0; i < str.length; i++) {
    reversedStr.push(str[i]);
  }

  reversedStr.reverse();

  let finalStr = "";
  for (let j = 0; j < reversedStr.length; j++) {
    finalStr += reversedStr[j];
  }

  return finalStr;
}
reverse("hey");
//Time Complexity = O(2n) => O(n)
//Space Complexity = O(n)
*/

//Solution 3
/*
function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}*/

//Solution 4 Advanced JS
/*
function reverse(str){
  return str.split("").reduce((output, char) => {
    output = char + output;
    return output;
  }, "")
}
*/

// TESTING CODE BELOW
mocha.setup("bdd");
const { assert } = chai;

describe("String Reversal", () => {
  it("reverse() correctly reverses string", () => {
    assert.equal(reverse("ffaa"), "aaff");
    assert.equal(reverse("  aaff"), "ffaa  ");
  });
});

mocha.run();
