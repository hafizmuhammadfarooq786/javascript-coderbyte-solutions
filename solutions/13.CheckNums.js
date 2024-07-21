// Check Nums
function checkNums(num1, num2){
    if(num2 > num1){
        return true;
    }else if(num1 === num2){
        return - 1
    }
    return false;
}
// Example usage:
console.log(' --------------- #13: Check Nums --------------- ');
console.log(`Solution: input num1=${15} and num2=${11}, output: `+ checkNums(15,11)); // Output: false
console.log(`Solution: input num1=${12} and num2=${19}, output: `+ checkNums(12,19)); // Output: true
console.log(`Solution: input num1=${67} and num2=${67}, output: `+ checkNums(67,67)); // Output: -1