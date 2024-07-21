// Permutation Step - Interview Assessment
// Determine the next greatest number using the same numbers of a given argument
function permutationStep(num){
    let arr = num.toString().split("");
    var x = arr.length;

    // Iterate through the digits of the number from right to left
    for(let i = x - 1; i >=0; i--){
        let a = arr[i]; // current digit
        let b = arr[i- 1]; // previous digit

        // Check if current digit is greater than the previous digit
        if(a > b){
            // Swap two digits
            arr[i] = b;
            arr[i - 1] = a;

            let temp =  arr.splice(i, x - 1).sort();

            return arr.concat(temp).join("");
        }
    } 

    // If there is no greater permutation, return -1
    return -1;
}
console.log(' --------------- #31: Permutation Step - Interview Assessment --------------- ');
console.log(`Solution: input: num=11121, output: `+ permutationStep(11121)); // Output: 11211
console.log(`Solution: input: num=41352, output: `+ permutationStep(41352)); // Output: 41523