// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left and right side
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  "use strict";

  let resultArray = [];

  if (n >= 1) {
    for (let i = 0; i < n; i++) {
      resultArray.push(" ");
    }

    for (let j = 0; j < n; j++) {
      if (n === 1) {
        resultArray[j] = "#";
        const finalResult = resultArray.join("");
        console.log(finalResult);
        break;
      } else if (n > 1) {
        resultArray[j] = " ";
        resultArray[j] = "#";

        const finalResult = resultArray.join("");
        console.log(finalResult);
        // console.log(resultArray);
      }
    }
  } else {
    console.log("Enter A Possitive Number.");
  }
}
pyramid(3);

/*mocha.setup("bdd");
const { assert } = chai;
console.log = sinon.spy();

describe("Pyramid", () => {
  it("pyramid() works", () => {
    pyramid(3);
    assert.equal(console.log.callCount, 3);
    assert.equal(console.log.getCall(0).args[0], "  #  ");
    assert.equal(console.log.getCall(1).args[0], " ### ");
    assert.equal(console.log.getCall(2).args[0], "#####");
  });
});

mocha.run();
*/
