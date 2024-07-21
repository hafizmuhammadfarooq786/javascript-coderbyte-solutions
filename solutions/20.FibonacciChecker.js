// Fibonacci Checker
// Determine whether a number is part of the Fibonacci Sequence
function fibonacciChecker(num) {
    let prev = [0];
    // Loop through each number in the sequence up to and including the input number
    for (i = 1; i < num+1; i) {
        // Calculate the next number in the sequence by adding the previous two
        var check = i + prev[0];
        // If the calculated number is equal to the input number, return "yes"
        if (check === num) {
        return 'yes';
        }
        // Add the current number to the beginning of the array to keep track of the previous two numbers
        prev.unshift(i);
        // Update the current number to be the next number in the sequence
        i = check;
    }
    // If the input number is not in the Fibonacci sequence, return "no"
    return 'no' 
}
// Example usage:
console.log(' --------------- #20: Fibonacci Checker --------------- ');
console.log(`Solution: input num=34, output: `+ fibonacciChecker(34)); // Output: yes
console.log(`Solution: input num=54, output: `+ fibonacciChecker(54)); // Output: no