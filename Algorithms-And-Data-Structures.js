console.log("up and running!");
/*NOTES*/
/*
Better implementation means faster time and use less memory(RAM) usage

Big O Notations(Counting Operations)
compare the number of operations for both functions

const sumUpTo = n => {
    return ( n * (n + 1) ) / 2;
};
Answer: 3 Operations(no matter how large N is) or O(3)

const sumUpTo = n => {
    let total = 0;
    for (let i = 1; i <= n; i ++) {
        total += i;
    }
    return total;
}
Answer: 1 * N Operations or O(n);

function loggerV1( n ) {
    for ( let i = 0; i < n; i++ ) {
        console.log("first runner");
    }
     for ( let i = 0; i < n; i++ ) {
        console.log("second runner");
    }
}
Answer: 2 * N or O(2n) Each forloop relies on N;

function loggerV2( n ) {
    for (let i = 0; i < 4; i++) {
        console.log("third runner");
    }
}
Answer: O(4) for loop not dependent on N;

function words(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i] + " " + arr[j]);
        }
    }
}
words(["canoodle", "rabbit", "alcoholic"])
Inner loop will run 3 times for 1 run of the outer loop.
creating a 3x3 metrix or 9 results, i.e O(3^2).
Answer: O(n^2);

function wordsV2(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            console.log(arr[i] + " " + arr2[j]);
        }
    }
}
wordsV2(["canoodle", "rabbit", "alcoholic"], ["cucamonga", "seattle"]);
I have a 3x2 metrix or 6 results, i.e O(3*2)
Answer: O(n*m);

IDENTIFYING RIUNTIME COMPLEXITY(RULES OF THUMB)

Iterating over a collection OR using N as a pointer with a for loop | O(n).
Iterating over the SAME collection with nested for loops | O(n^2).
Iterating over DIFFERENT collection with nested for loops. | O(n*m).

SIMPLIFITYING BIG O NOTATION

    Constants do NOT Matter(i.e Big O only cares about Graph Shape in the long run)
      O(12) -> O(1)
      O(2n) -> O(n)
     O(n/2) -> O(n)
   O(13n^2) -> O(n^2)

    Smaller Terms do Not Matter(i.e Big O only cares about the number of opeationsto do as N appraches infinity)
        O(n + 10) -> O(n)
    O(1337n + 50) -> O(n)
 O(n^2 + 13n + 8) -> O(n^2)

 A reLook to the functions with Big O Simplified

const sumUpTo = n => {
    return ( n * (n + 1) ) / 2;
};
Answer: O(3) becomes O(1);

const sumUpTo = n => {
    let total = 0;
    for (let i = 1; i <= n; i ++) {
        total += i;
    }
    return total;
}
Answer: 1 * N Operations or O(n) stays O(n);

function loggerV1( n ) {
    for ( let i = 0; i < n; i++ ) {
        console.log("first runner");
    }
     for ( let i = 0; i < n; i++ ) {
        console.log("second runner");
    }
}
Answer: 2 * N or O(2n) Each forloop relies on N becomes O(n);

function loggerV2( n ) {
    for (let i = 0; i < 4; i++) {
        console.log("third runner");
    }
}
Answer: O(4) for loop not dependent on N becomes O(1);

CHECK:
function check(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(number{i})
    }
}
The for loop will run at least 5 times so O(5n) simplified to O(n).
Answer: O(n);

OTHER TERMS FOR BIG O NOTATION/TIME COMPLEXITY

              O(1) -> Constant Time
              O(n) -> Linear Time
              O(n^2) -> Quadratic time

BIG O NOTATION/TIME COMPLEXITY OF OTHER THINGS

Arithmetic Operations have constant time complexity of O(1):
  It takes the processor the same amount of time to do 1+1 as 1000000+1

Variable Assignment has constant time complexity of O(1):
  It takes the processor the same amount of time to do var x as var x = 1000000


Space Complexity


*/
