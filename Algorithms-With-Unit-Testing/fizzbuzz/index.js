// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {}
/*
// Solution 1
function fizzBuzz(n) {
  "use strict";
  let numbers = [];
  let reversedNumbers = [];

  for (let i = n; i > 0; i--) {
    numbers.push(n--);
  }
  for (let j = numbers.length - 1; j >= 0; j--) {
    reversedNumbers.push(parseInt(numbers[j], 10));
  }
  for (let k = 0; k < reversedNumbers.length; k++) {
    const reversedNumber = reversedNumbers[k];

    if (reversedNumber % 3 === 0 && reversedNumber % 5 === 0) {
      console.log("fizzbuzz");
    } else if (reversedNumber % 3 === 0 && reversedNumber % 5 > 0) {
      console.log("fizz");
    } else if (reversedNumber % 5 === 0 && reversedNumber % 3 > 0) {
      console.log("buzz");
    } else {
      console.log(reversedNumber);
    }
  }
}
//Time Complexity O(3*N) => O(N)
//Space Complexity O(N)
*/

mocha.setup("bdd");
const { assert } = chai;
console.log = sinon.spy();

describe("Fizz Buzz", () => {
  it("fizzbuzz(30) should console log 30 times", () => {
    fizzBuzz(30);
    assert.equal(console.log.callCount, 30);
  });
  it("fizzbuzz(30) console logs correct values", () => {
    fizzBuzz(30);
    assert.equal(console.log.getCall(0).args[0], 1);
    assert.equal(console.log.getCall(1).args[0], 2);
    assert.equal(console.log.getCall(2).args[0], "fizz");
    assert.equal(console.log.getCall(3).args[0], 4);
    assert.equal(console.log.getCall(4).args[0], "buzz");
    assert.equal(console.log.getCall(5).args[0], "fizz");
    assert.equal(console.log.getCall(6).args[0], 7);
    assert.equal(console.log.getCall(7).args[0], 8);
    assert.equal(console.log.getCall(8).args[0], "fizz");
    assert.equal(console.log.getCall(9).args[0], "buzz");
    assert.equal(console.log.getCall(10).args[0], 11);
    assert.equal(console.log.getCall(11).args[0], "fizz");
    assert.equal(console.log.getCall(12).args[0], 13);
    assert.equal(console.log.getCall(13).args[0], 14);
    assert.equal(console.log.getCall(14).args[0], "fizzbuzz");
  });
});

mocha.run();
