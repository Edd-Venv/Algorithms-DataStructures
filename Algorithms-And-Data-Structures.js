console.log("up and running!");
/*NOTES*/
/*
Better implementation means faster time and use less memory(RAM) usage

Big O Notations(Counting Operations)
compare the number of operations for both functions

const sumUpTo = n => {
    return ( n * (n +1) ) / 2;
};
Answer: 3 Operations(no matter how large N is) or O(3)

const sumUpTo = n => {
    let total = 0;
    for (let i = 1; i <= n; i ++) {
        total += i;
    }
    return total;
}
Answer: 1 * N Operations or O(n)

function loggerV1( n ) {
    for ( let i = 0; i < n; i++ ) {
        console.log("first runner");
    }
     for ( let i = 0; i < n; i++ ) {
        console.log("second runner");
    }
}
Answer: 2 * N or O(2n) Each forloop relies on N

function loggerV2( n ) {
    for (let i = 0; i < 4; i++) {
        console.log("third runner");
    }
}
Answer: O(4) for loop not dependent on N

function words(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i] + " " + arr[j]);
        }
    }
}
words(["canoodle", "rabbit", "alcoholic"])
*/
