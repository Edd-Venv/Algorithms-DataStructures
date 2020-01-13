function sum(num1, num2) {
  "use strict";
  return num1 + num2;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
