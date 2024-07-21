// Division - Interview Assessment
// Determine the greatest common factor between two numbers
function division(num1, num2){
    let highest = 0;
    let limit = Math.min(num1, num2); // limit to the smallest of the two input numbers

    // If both numbers are equal
    if(num1 === num2){ return 1; }

    // Iterate through all numbers from 1 to limit
    for (let i = 0; i <= limit; i++){
        // Check if current number is a divisor of both numbers
        if(num1 % i === 0 && num2 % i === 0){
            highest = i;
        }
    }

    return highest;
}
console.log(' --------------- #32: Division - Interview Assessment --------------- ');
console.log(`Solution: input: num1=7 & num2=3, output: `+ division(7,3)); // Output: 1
console.log(`Solution: input: num1=6 & num2=8, output: `+ division(6,8)); // Output: 2
console.log(`Solution: input: num1=36 & num2=54, output: `+ division(36,54)); // Output: 18