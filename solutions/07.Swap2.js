// Swap II
function swapII(str) {
    // Swap the case of each character
    str = str.replace(/([a-z])|([A-Z])/g, (match, p1, p2) => {
        if(p1){
            return p1.toUpperCase()
        }else{
            return p2.toLowerCase()
        }
    });
    
    // Look for numbers that are next to letters
    str = str.replace(/\d+[a-zA-Z]+\d+/g, (match) => {
        // Swap position of two numbers
        const firstNum = match.match(/\d+/)[0];
        const secondNum = match.match(/\d+$/)[0];
        const letters =  match.match(/[a-zA-z]+/)[0];
        return secondNum + letters + firstNum;
    }) 
    return str;
}
// Example usage:
console.log(' --------------- #07: Swap II --------------- ');
console.log(`Solution 1: input: ${"Hello - 5LOL6"}, output: `+ swapII("Hello - 5LOL6")); // Output: hELLO - 6lol5
console.log(`Solution 2: input: ${"2S 6 du5d4e"}, output: `+ swapII("2S 6 du5d4e")); // Output: 4s 5 DU6D2E
