// Alphabet Soup - Interview Assessment
// Sorting characters in a string
function alphabetSoup(str){
    const charArray = str.split("");
    const sortedCharArray = charArray.sort();
    return sortedCharArray.join('');
}
console.log(' --------------- #27: Alphabet Soup - Interview Assessment --------------- ');
console.log(`Solution: input: str="coderbyte", output: `+ alphabetSoup("coderbyte")); // Output: bcdeeorty
console.log(`Solution: input: str="hooplah", output: `+ alphabetSoup("hooplah")); // Output: ahhloop