describe("Single Element", () => {
  it("Should find the only element with one occurance", () => {
    const arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];
    expect(singleElement(arr)).toBe(2);
  });
});
