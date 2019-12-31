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
/*function vowels(str) {
  "use strict";
  let sanitizedString = str.toLowerCase();
  let vowelsString = "aeiou";
  let count = 0;

  for (let i = 0; i < vowelsString.length; i++) {
    const vowel = vowelsString[i];

    for (let j = 0; j < sanitizedString.length; j++) {
      const string = sanitizedString[j];

      if (vowel === string) {
        count += 1;
      }
    }
  }
  if (count > 0) {
    return count;
  } else {
    return 0;
  }
}
//Time Complexity = O(n);
//Space Complexity = O(1);

*/
//Solution 3

function vowels(str) {
  str = str.toLowerCase();
  const vowels = "aeiou".split("");
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    for (let j = 0; j < vowels.length; j++) {
      const vowel = vowels[j];

      if (char === vowel) {
        count++;
      }
    }
  }
  return count;
}
//Time Complexity = O(n);
//Space Complexity = O(1);

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
