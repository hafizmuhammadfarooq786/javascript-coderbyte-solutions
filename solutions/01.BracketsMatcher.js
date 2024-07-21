// Brackets Matcher
// The challenge typically involves checking if every opening bracket has a corresponding closing bracket
// in the correct order. This solution handles various types of brackets: (), {}, and [].

console.log(' --------------- Inputs --------------- ');
const bracketInput1 = "(coder)(byte))";
const bracketInput2 = "(c(oder)) b(yte)";

// Solution 1
function isValidBracketSequence(s) {
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (bracketPairs[char]) {
            // If the character is an opening bracket, push it to the stack
            stack.push(char);
        } else if (Object.values(bracketPairs).includes(char)) {
            // If the character is a closing bracket, check if it matches the top of the stack
            const top = stack.pop();
            if (bracketPairs[top] !== char) {
                return 0;
            }
        }
    }

    // In the end, the stack should be empty if all brackets are properly closed
    return stack.length === 0 ? 1 : 0;
}
// Example usage:
console.log(' --------------- #01: Brackets Matcher --------------- ');
console.log(`Solution 1: input: ${bracketInput1}, output: `+ isValidBracketSequence(bracketInput1)); // Output: 0
console.log(`Solution 2: input: ${bracketInput2}, output: `+ isValidBracketSequence(bracketInput2)); // Output: 1


// Solution 2: if only checks for round brackets
function bracketMatcher(str) { 
  const stack = [];
  for(let char of str){
    if(char === '('){
      stack.push(char);
    }else if(char === ')'){
      if(stack.length){
        stack.pop();
      }else{
        return 0;
      }
    }
  }
  return stack.length ? 0 : 1; 

}
// Example usage:
console.log(' --------------- #01: Brackets Matcher --------------- ');
console.log(`Solution 2: input: ${bracketInput1}, output: `+ bracketMatcher(bracketInput1)); // Output: 0
console.log(`Solution 2: input: ${bracketInput2}, output: `+ bracketMatcher(bracketInput2)); // Output: 1

module.exports = bracketsMatcher;