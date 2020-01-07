// Implement a swap helper function that we will use in both BS and SS
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

//bubbleSort works by having sorted data accumulate at end of array
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

//selectionSort works by having sorted data accumulate at start of array
function selectionSort(arr) {}

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

/*
"use strict";
  let i = 0;

  while (i < 2) {
    let I = arr[i];
    let J = arr[i + 1];
    console.log(i);
    console.log(arr);

    if (J === undefined) {
      return arr;
    } else if (J && I > J) {
      swap(arr, i, i + 1);
      i++;
    }
    if (i === arr.length - 1) {
      console.log("END OF LOOP");
    }
  }
  return arr;
///////////////////////////////////////////
"use strict";
  for (let i = 0; i < arr.length; i++) {
    let I = arr[i];
    let J = arr[i + 1];

    if (J === undefined) {
      return arr;
    } else if (J) {
      //console.log("index i is " + i + " and index j is " + (i + 1));
      if (I > J) {
        swap(arr, i, i + 1);
        console.log("in loop array " + arr);
      }
    }
  }
  return arr;
*/
