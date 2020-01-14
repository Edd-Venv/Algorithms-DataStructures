const swap = (arr, i, j) => {
  "use strict";
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

function paritySort(arr) {
  "use strict";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && i % 2 < 0) {
      swap(arr, i, i + 1);
    } else if (arr[i] % 2 > 0 && i % 2 == 0) {
      swap(arr, i, i + 1);
    }
  }

  return arr;
}

test("when sorted, even numbers and odd numbers are at even and odd indices respectively.", () => {
  let testArray = [3, 2, 5, 6];
  expect(paritySort(testArray)).toEqual([2, 3, 6, 5]);
});

test("array should contain only positive numbers", () => {
  let testArray = [1, 2, 3, 4];

  for (let i = 0; i < testArray.length; i++) {
    let element = testArray[i];
    expect(element).toBeGreaterThan(0);
  }
});

test("half of the array elements are even", () => {
  let testArray = [1, 2, 3, 4, 5, 6];
  let count = 0;

  for (let i = 0; i < testArray.length; i++) {
    if (testArray[i] % 2 === 0) {
      count++;
    }
  }
  expect(count).toBe(testArray.length / 2);
});
