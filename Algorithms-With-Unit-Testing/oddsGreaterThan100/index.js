// Return an odd number greater than 100.

function oddsGreaterThan100() {
  return 113;
}

// TESTING CASES
mocha.setup("bdd");
const { assert } = chai;

describe("oddsGreaterThan100", () => {
  it("returns an odd number.", () => {
    const res = oddsGreaterThan100();
    assert.equal(typeof res, "number");
    assert.equal(res % 2 !== 0, true);
  });
  it("returns a number greater than 100.", () => {
    const res = oddsGreaterThan100();
    assert.equal(typeof res, "number");
    assert.equal(res > 100, true);
  });
});

mocha.run();
