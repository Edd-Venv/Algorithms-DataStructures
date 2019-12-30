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

//Solution 1
/*
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
*/
//Time Complexity = O(n);
//Space Complexity = O(n);

//Solution 2
/*function steps(n) {
  "use strict";

  for (let i = 1; i <= n; i++) {
    let step = "";

    for (let hash = i; hash > 0; hash--) {
      step += "#";
    }
    for (let space = n - i; space > 0; space--) {
      step += " ";
    }

    console.log(step);
  }
}
*/
//Time Complexity = O(n^2);
//Space Complexity = O(n);

//Solution 3
/*
function steps(n) {
  "use strict";

  for (let i = 1; i <= n; i++) {
    let step = "";
    step += "#".repeat(i);
    step += " ".repeat(n - i);

    console.log(step);
  }
}*/
//Time Complexity = O(n^2);
//Space Complexity = O(n);

//Solution 4

/*function steps(n) {
  "use strict";

  for (let i = 0; i < n; i++) {
    resultArray.push(" ");
  }

  for (let j = 0; j < n; j++) {
    
      resultArray[j] = " ";
      resultArray[j] = "#";

      const finalResult = resultArray.join("");
      console.log(finalResult);
}
*/

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
