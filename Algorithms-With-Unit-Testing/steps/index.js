// Write a function that takes a number N.
// Over multiple lines it should console log a step shape
// with N levels using the # character. Be sure to notice
// how each step has some number of empty spaces to the right!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  "use strict";

  let resultArray = [];

  for (let i = 0; i < n; i++) {
    resultArray.push(" ");
  }

  for (let j = 0; j < n; j++) {
    resultArray[j] = "#";

    const finalResult = resultArray.join("");
    console.log(finalResult);
  }
}
//Time Complexity = O(n);
//Space Complexity = O(n);

mocha.setup("bdd");
const { assert } = chai;
console.log = sinon.spy();

describe("Steps", () => {
  it("steps() works", () => {
    steps(3);
    assert.equal(console.log.callCount, 3);
    assert.equal(console.log.getCall(0).args[0], "#  ");
    assert.equal(console.log.getCall(1).args[0], "## ");
    assert.equal(console.log.getCall(2).args[0], "###");
  });
});

mocha.run();
