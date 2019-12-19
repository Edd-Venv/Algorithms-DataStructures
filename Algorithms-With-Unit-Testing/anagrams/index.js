// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False
/*
// 3/4 solved
function anagrams(stringA, stringB) {
  "use strict";
  let stringC = "";
  let newStringA = stringA.toLowerCase();
  let newStringB = stringB.toLowerCase();
  let arrayA = [];

  for (let k = 0; k < newStringA.length; k++) {
    arrayA.push(newStringA[k]);
  }

  for (let i = 0; i < arrayA.length; i++) {
    const A = arrayA[i];

    for (let j = 0; j < newStringB.length; j++) {
      const B = newStringB[j];

      if (A === B) {
        stringC += A;
      }
    }
      arrayA[i]
  }

  if (arrayA.length === stringC.length) {
    return true;
  } else {
    return false;
  }
}
console.log(anagrams("hey!", " hey"));
*/

mocha.setup("bdd");
const { assert } = chai;

describe("Anagrams", () => {
  it("works if case sensitivity and non word characters NOT taken into account", () => {
    assert.equal(anagrams("earth", "heart"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("is case insensitive. 'HEART' and 'earth' should return true", () => {
    assert.equal(anagrams("HEART", "earth"), true);
    assert.equal(anagrams("heart", "EARTH"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
    assert.equal(anagrams("heart!", " earth"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
});

mocha.run();
