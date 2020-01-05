// Given a text and a pattern, write a function that shows
// how many times the pattern occurs in the text.
// stringPatternSearch("lollipop", "lol") --> 1
// stringPatternSearch("lolol", "lol") --> 2

//Solution 1

function stringPatternSearch(text, pattern) {
  "use strict";
  let string = "";
  let patternCount = 0;

  for (let i = 0; i < text.length; i++) {
    string += text[i];
    if (pattern === string) {
      patternCount++;
      string = "";
      string = text[i];
    }
  }

  return patternCount;
}
//Time Complexity = O(n);
//Space Complexity = O(n);

//Solution 2
/*function stringPatternSearch(text, pattern) {
  "use strict";
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      const patternChar = pattern[j];
      if (patternChar !== text[i + j]) {
        break;
      }

      if (j === pattern.length - 1) {
        count++;
      }
    }
  }
  return count;
}*/
//Time Complexity = O(N*M);
//Space Complexity = O(1);

mocha.setup("bdd");
const { assert } = chai;

describe("stringPatternSearch()", () => {
  it("works.", () => {
    assert.equal(stringPatternSearch("lollipop", "lol"), 1);
    assert.equal(stringPatternSearch("lolol", "lol"), 2);
  });
});

mocha.run();
