// String Reduction - Interview Assessment
// Manipulate a string of characters using a simple reduction method
function stringReduction(str){
    let prevLength;
    do {
        prevLength = str.length;
        str = str.replace(/ab|ba/, 'c');
        str = str.replace(/ca|ac/, 'b');
        str = str.replace(/bc|cb/, 'a');
        
    } while (str.length !== prevLength);

    return str.length;
}

console.log(' --------------- #33: String Reduction - Interview Assessment --------------- ');
console.log(`Solution: input: str="abcabc", output: `+ stringReduction("abcabc")); // Output: 2
console.log(`Solution: input: str="cccc", output: `+ stringReduction("cccc")); // Output: 4