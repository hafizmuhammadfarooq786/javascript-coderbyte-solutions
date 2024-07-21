// String Scramble
// The challenge typically involves determining if a portion of one string can be rearranged to match another string.
// In other words, we need to check if the characters of one string can be rearranged to form another string.
function canScramble(str1, str2) {
    const charCount = {};

    // Count the occurrences of each character in str2
    for (let char of str2) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    // Check if str1 can be formed by characters in str2
    for (let char of str1) {
        if (charCount[char]) {
            charCount[char]--;
            if (charCount[char] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
}
// Example usage:
const scrambleInput1 = "cdore";
const scrambleInput2 = "coder";
const scrambleInput3 = "abc";
const scrambleInput4 = "cdeb";
console.log(' --------------- #04: String Scramble --------------- ');
console.log(`Solution: inputs: ${scrambleInput1} and ${scrambleInput2}, output: `+ canScramble(scrambleInput1, scrambleInput2)); // Output: true
console.log(`Solution: inputs: ${scrambleInput3} and ${scrambleInput4}, output: `+ canScramble(scrambleInput3, scrambleInput4)); // Output: false
