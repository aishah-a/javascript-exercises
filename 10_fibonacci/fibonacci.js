/*
> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
*/

function fibonacci(n) {
    if (n < 0) {
        return "OOPS";
    }
    if (n === 0) {
        return 0;
    }
    const fib = [0, 1]
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    let finalFib = fib[fib.length -1];
    return finalFib;
}


// Do not edit below this line
module.exports = fibonacci;
