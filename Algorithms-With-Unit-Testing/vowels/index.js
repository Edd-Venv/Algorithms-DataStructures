// Write a function that returns the number of vowels found within a string.
// Vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Make sure the function is case insensitive!
// --- Examples
//   vowels('What') --> 1
//   vowels('Why?') --> 0
//   vowels('aEiOu') --> 5
//   vowels('I am a world-class developer using iterations') --> 16

//solution 1
/*function vowels(str) {
  "use strict";
  let sanitizedString = str.toLowerCase();
  let regex = /[aeiou]/g;
  let count = sanitizedString.match(regex);

  if (count !== null) {
    return count.length;
  } else {
    return 0;
  }
}
*/

//Solution 2
function vowels(str) {
  "use strict";
  let sanitizedString = str.toLowerCase();
  let vowelsString = "aeiou";
  let count = 0;

  for (let i = 0; i < vowelsString; i++) {
    const vowel = vowelsString[i];

    for (let j = 0; j < sanitizedString; j++) {
      const string = sanitizedString[j];

      if (vowel === string) {
        count++;
      }
    }
  }
  if ((count = 0)) {
    return 0;
  } else {
    return count;
  }
}
/*
mocha.setup("bdd");
const { assert } = chai;

describe("Vowels", () => {
  it("gets correct vowel count", () => {
    assert.equal(vowels("What"), 1);
    assert.equal(vowels("Why"), 0);
  });
  it("is case insensitive. vowels('aEiOu') should return 5", () => {
    assert.equal(vowels("aEiOu"), 5);
    assert.equal(vowels("I am a world-class developer using iterations"), 16);
  });
});

mocha.run();
*/
