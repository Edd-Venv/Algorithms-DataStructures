// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

// Solution 1
/*
function anagrams(stringA, stringB) {
  "use strict";
  let stringC = "";
  let sanitaizedStringA = "";
  let newStringB = stringB.toLowerCase();
  let reStringA = stringA.match(/[^\d\W]/gi);

  for (let h = 0; h < reStringA.length; h++) {
    sanitaizedStringA += reStringA[h];
  }

  let newStringA = sanitaizedStringA.toLowerCase();

  for (let i = 0; i < newStringA.length; i++) {
    const A = newStringA[i];

    for (let j = 0; j < newStringB.length; j++) {
      const B = newStringB[j];

      if (A === B) {
        stringC += A;
      }
    }
  }

  if (newStringA.length === stringC.length) {
    return true;
  } else {
    return false;
  }
}*/

//Solution 2
function anagrams(stringA, stringB) {}

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
