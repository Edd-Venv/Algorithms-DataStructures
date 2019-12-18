// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'

function capitalize(str) {
  "use strict";
  let newStr = "";
  newStr += str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== " ") {
      newStr += str[i].toLowerCase();
    } else if (str[i] === " ") {
      newStr += str[i];
      newStr += str[i + 1].toUpperCase();
      i++;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(capitalize("hey"));

mocha.setup("bdd");
const { assert } = chai;

describe("Capitalization", () => {
  it("capitalizes the first letter of each word", () => {
    assert.equal(capitalize("I'm a little tea pot"), "I'm A Little Tea Pot");
  });
  it("lowercases the rest of the word", () => {
    assert.equal(capitalize("sHoRt AnD sToUt"), "Short And Stout");
  });
});

mocha.run();
