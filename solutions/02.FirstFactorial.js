// First Factorial
// The challenge typically involves calculating the factorial of a given number. 
function firstFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
// Example usage:
const factorialInput1 = 4;
const factorialInput2 = 8;
console.log(' --------------- #02: First Factorial --------------- ');
console.log(`Solution: input: ${factorialInput1}, output: `+ firstFactorial(factorialInput1)); // Output: 24
console.log(`Solution: input: ${factorialInput2}, output: `+ firstFactorial(factorialInput2)); // Output: 40320
