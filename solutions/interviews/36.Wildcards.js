// Wildcards - Interview Assessment
// Determine if a string matches a set of wildcard characters 
function wildcards(str){
    let arr = str.split(' ');
    const pattern = arr[0];
    const word = arr[1];

    let regex = "";
    // Iterate through characters in the pattern string
    for(let i = 0; i < pattern.length; i++){
        if(pattern[i] === "+"){ // If character is +, add [a-z]
            regex += '[a-z]'
        }else if(pattern[i] === "$"){ // If character is $, add [1-9]
            regex += '[1-9]'
        }else if(pattern[i] === "*"){ // If character is *, generate a pattern to match a sequence
            if(pattern[i+1] === "{"){
                regex += '.{' + pattern[i+2] + '}';
            }else{
                regex += '.{3}';
            }
        }
    }

    return new RegExp("^" + regex + "$").test(word);
}
console.log(' --------------- #36: Wildcards - Interview Assessment --------------- ');
console.log(`Solution: input: str="+++++* abcdehhhhhh", output: `+ wildcards("+++++* abcdehhhhhh")); // Output: false
console.log(`Solution: input: str="$**+*{2} 9mmmrrrkbb", output: `+ wildcards("$**+*{2} 9mmmrrrkbb")); // Output: true