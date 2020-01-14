test("array should contain only positive numbers", () => {
  let testArray = [1, 2, 3, 4];

  for (let i = 0; i < testArray.length; i++) {
    let element = testArray[i];
    expect(element).toBeGreaterThan(0);
  }
});
