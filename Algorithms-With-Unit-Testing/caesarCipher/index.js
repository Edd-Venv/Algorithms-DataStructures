// Given a phrase, substitute each character by shifting it up
// the alphabet by a given integer. If necessary, the shifting
// should wrap around back to the beginning of the alphabet.
// Make sure the function only shifts letters.
// --- Examples
// caeserCipher("abcd", 1) === "bcde";
// caeserCipher("yz", 1) === "za";
// caeserCipher("abcd", 100) === "wxyz";
// caeserCipher("gurer ner 9 qbtf!", 13) === "there are 9 dogs!"

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
    } else {
      for (let k = 0; k < alphabetArray.length; k++) {
        const arrayChar = alphabetArray[k];

        if (char === arrayChar) {
          if (!alphabetArray[k + shift]) {
            for (let h = 0; h <= k; h++) {
              let appendLetter = alphabetArray[h];
              alphabetArray.shift();
              alphabetArray.push(appendLetter);
              alphabetArray.unshift(appendLetter);

              //console.log(h);
            }
            console.log(alphabetArray);
          } else if (alphabetArray[k + shift]) {
            finalString += alphabetArray[k + shift];
          }
        }
      }
    }
  }
  console.log(finalString);
  return finalString;
}
caesarCipher("abc", 25);

/*
 if (char === arrayChar) {
          if (!alphabetArray[k + shift]) {
            for (let h = 0; h <= k + shift; h++) {
              let appendLetter = alphabetArray[h];
              alphabetArray.push(appendLetter);
              //console.log(h);
            }
            console.log(alphabetArray);
          } else if (alphabetArray[k + shift]) {
            finalString += alphabetArray[k + shift];
          }
*/
/*mocha.setup("bdd");
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

mocha.run();*/
