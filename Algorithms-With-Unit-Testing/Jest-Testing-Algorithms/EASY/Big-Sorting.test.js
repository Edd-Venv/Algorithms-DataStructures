test("it should sort and return an arr with an ascending order", () => {
  const array = [6, 1, 3, 10, 5];
  expect(bigSorting(array)).toEqual([1, 3, 5, 6, 10]);
});
