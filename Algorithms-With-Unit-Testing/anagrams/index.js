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
}
//Time Complexity = O(N) => O(N^2);
//Space Complexity = O(N);

//Solution 2
/*
function anagrams(stringA, stringB) {
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  if (stringA.length !== stringB.length) {
    return false;
  }
  const stringACharCount = {};

  for (let i = 0; i < stringA.length; i++) {
    const aChar = stringA[i];

    stringACharCount[aChar] = stringACharCount[aChar] + 1 || 1;
  }
  for (let i = 0; i < stringB.length; i++) {
    const bChar = stringB[i];

    if (!stringACharCount[bChar]) {
      return false;
    } else {
      stringACharCount[bChar]--;
    }
  }
  return true;
}
//Time Complexity = O(2*N) => O(N);
//Space Complexity = O(N);*/

//Solution 3
/*
function anagrams(stringA, stringB) {
  "use strict";

  let A = stringA.match(/[^\d\W]/gi);
  let B = stringB.match(/[^\d\W]/gi);
  let arrayA = [];
  let arrayB = [];

  for (let i = 0; i < A.length; i++) {
    arrayA.push(A[i].toLowerCase());
  }
  for (let j = 0; j < B.length; j++) {
    arrayB.push(B[j].toLowerCase());
  }

  let sortedArrayA = arrayA.sort();
  let sortedArrayB = arrayB.sort();

  let sanitizedStringA = "";
  let sanitizedStringB = "";

  for (let k = 0; k < sortedArrayA.length; k++) {
    sanitizedStringA += sortedArrayA[k];
  }
  for (let h = 0; h < sortedArrayB.length; h++) {
    sanitizedStringB += sortedArrayB[h];
  }

  if (sanitizedStringA === sanitizedStringB) {
    return true;
  } else {
    return false;
  }
}
//Time Complexity = O(4*N) => O(N);
//Space Complexity = O(N);
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
