// Given a phrase, substitute each character by shifting it up
// the alphabet by a given integer. If necessary, the shifting
// should wrap around back to the beginning of the alphabet.
// Make sure the function only shifts letters.
// --- Examples
// caeserCipher("abcd", 1) === "bcde";
// caeserCipher("yz", 1) === "za";
// caeserCipher("abcd", 100) === "wxyz";
// caeserCipher("gurer ner 9 qbtf!", 13) === "there are 9 dogs!"

//Solution 1
/*function caesarCipher(str, shift) {
  "use strict";
  let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let res = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const idx = alphabetArr.indexOf(char);
    if (idx === -1) {
      res += char;
      continue;
    }

    const encodedIdx = (idx + shift) % 26;
    res += alphabetArr[encodedIdx];
  }
  return res;
}
//Time Complexity = O(n);
//Space Complexity = O(n);*/

function caesarCipher(str, shift) {
  "use strict";

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArray = [];
  let sanitizedString = str.toLowerCase();
  let finalString = "";

  for (let i = 0; i < alphabet.length; i++) {
    alphabetArray.push(alphabet[i]);
  }

  for (let j = 0; j < sanitizedString.length; j++) {
    const char = sanitizedString[j];

    if (/[^a-z]/gi.test(char)) {
      finalString += char;
      continue;
    } else {
      for (let k = 0; k < alphabetArray.length; k++) {
        const arrayChar = alphabetArray[k];

        if (char === arrayChar) {
          if (alphabetArray[k + shift]) {
            finalString += alphabetArray[k + shift];
            break;
          } else if (!alphabetArray[k + shift]) {
            for (let h = 0; h <= k + shift; h++) {
              let appendLetter = alphabetArray[h];
              alphabetArray.push(appendLetter);
            }
          }
        }
      }
    }
  }

  return finalString;
}
caesarCipher("gurer ner 9 qbtf!", 13);

mocha.setup("bdd");
const { assert } = chai;

describe("caesarCipher()", () => {
  it("shifts letters correctly.", () => {
    assert.equal(caesarCipher("abcd", 1), "bcde");
    assert.equal(caesarCipher("yz", 1), "za");
    assert.equal(caesarCipher("abcd", 100), "wxyz");
  });
  it("does not shift digits or other characters such as '!'.", () => {
    assert.equal(caesarCipher("gurer ner 9 qbtf!", 13), "there are 9 dogs!");
  });
});

mocha.run();
