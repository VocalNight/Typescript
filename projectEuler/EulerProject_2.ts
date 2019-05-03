// Cant exceed 4 million
// fibonacci sequence = 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// each new number is the sum of the last 2
// find the SUM of only the EVEN numbers

function fibonacciEvenList(sum1: number, sum2: number, limit: number): number[] {
    if (sum1 + sum2 > limit) {
        return [];
    }
    let result = sum1 + sum2;
    if (result % 2 === 0) {
        return [result].concat(fibonacciEvenList(sum2, result, limit));
        // If not even, don't add it to the list
    } else {
        return [].concat(fibonacciEvenList(sum2, result, limit));
    }

}

// the first 2 won't be added to the list, so we manually add it.
console.log(fibonacciEvenList(1, 2, 4000000)
.reduce((a, b) => a + b) + 2);