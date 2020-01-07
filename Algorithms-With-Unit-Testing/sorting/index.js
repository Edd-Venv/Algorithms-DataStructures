// Implement a swap helper function that we will use in both BS and SS
//SWAP solution 1
function swap(arr, i, j) {
  "use strict";
  const valueI = arr[i];
  const valueJ = arr[j];

  for (let k = 0; k < arr.length; k++) {
    if (k === i) {
      arr[i] = valueJ;
    } else if (k === j) {
      arr[j] = valueI;
    }
  }
  return arr;
}

//SWAP soultion 2
/*function swap(arr, i, j) {
  "use strict";
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
*/

//bubbleSort works by having sorted data accumulate at end of array
//BUBBLESORT Solution 1
function bubbleSort(arr) {
  "use strict";
  for (let i = 0; i < arr.length; i++) {
    let firstNumber = arr[i];

    for (let j = 0; j < arr.length; j++) {
      let secondNumber = arr[j];

      if (firstNumber < secondNumber) {
        swap(arr, i, j);
      }
    }
  }

  return arr;
}

//BUBBLESORT Solution 2
/*function bubbleSort(arr) {
  "use strict";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
*/

//selectionSort works by having sorted data accumulate at start of array
function selectionSort(arr) {
  "use strict";
}

mocha.setup("bdd");
const { assert } = chai;

describe("swap()", () => {
  it("swaps values in an array when provided with 2 indexes.", () => {
    const arr = [13, 2, 4];
    swap(arr, 0, 1);
    assert.deepEqual(arr, [2, 13, 4]);
  });
});

describe("Bubble Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(bubbleSort([5, 1, 3, 7, 6, 2, 4]), [1, 2, 3, 4, 5, 6, 7]);
  });
});

describe.skip("Selection Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(selectionSort([5, 1, 3, 2, 4]), [1, 2, 3, 4, 5]);
  });
});

mocha.run();
