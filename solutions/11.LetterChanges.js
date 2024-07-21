// Letter Changes
// Manipulating characters in a string based of their positions in the alphabets
function letterChanges(str){
    let charArr = str.split('');
    for(let i = 0; i < str.length; i++){
        if(charArr[i].match(/[a-z]/)){ // handle uppercase string
            if(charArr[i] === 'z'){
                charArr[i] = 'A';
                continue;
            }

            // Change letter to next in alphabet
            charArr[i] = String.fromCharCode(charArr[i].charCodeAt(0) + 1);

            // Uppercase the vowels
            if(charArr[i].match(/[aeiou]/gi)){
                charArr[i] = charArr[i].toUpperCase();
            }

        }
    }
    return charArr.join("");
}
// Example usage:
console.log(' --------------- #11: Letter Changes --------------- ');
console.log(`Solution: input: ${"hello*3"}, output: `+ letterChanges("hello*3")); // Output: 4
console.log(`Solution: input: ${"fun times!"}, output: `+ letterChanges("fun times!")); // Output: 6
