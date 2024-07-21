// Run Length
// The challenge typically involves encoding a string by replacing consecutive repeating characters with the
// character followed by the count of repetitions. This is known as run-length encoding.

// Solution 1:
function runLength(str){
    let result = "";
    let count = 1;
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){
            count++;
        }else{
            result += str[i] + count;
            count = 1
        }
    }
    return result
}
// Example usage:
const runLengthInput1 = 'aaabbc';
console.log(' --------------- #03-01: Run Length --------------- ');
console.log(`Solution 1: input: ${runLengthInput1}, output: `+ runLength(runLengthInput1)); // Output: a3b2c1

// Solution 2
function runLengthEncoded(str){
    let charCount = {};
    for(let char of str){
        if(charCount[char]){
            charCount[char]++;
        }else{
            charCount[char] = 1
        }
    }

    let result = ""
    for(let char in charCount ){
        result += charCount[char] + char;
    }

    return result
}
// Example usage:
const runLengthInput2 = 'aaabbcabc';
console.log(' --------------- #03-02: Run Length --------------- ');
console.log(`Solution 2: input: ${runLengthInput2}, output: `+ runLengthEncoded(runLengthInput2)); // Output: 4a3b2c
