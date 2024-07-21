// Missing Digit - Interview Assessment
// Determine what the variable is in a mathematical equation.
function missingDigit(str){
    let x = 0;
    let temp = str.replace('x', x);
    let arr = temp.split(" = ");

    while (eval(arr[0]) !== eval(arr[1])){
        x++;
        temp = str.replace('x', x);
        arr = temp.split(" = ");
    }

    return x;
}

console.log(' --------------- #28: Missing Digit - Interview Assessment --------------- ');
console.log(`Solution: input: str="4 - 2 = x", output: `+ missingDigit("4 - 2 = x")); // Output: 2
console.log(`Solution: input: str="1x0 * 12 = 1200", output: `+ missingDigit("1x0 * 12 = 1200")); // Output: 0