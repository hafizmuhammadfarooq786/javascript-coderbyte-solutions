// Array Addition
// This challenge, where we need to determine if a combination of numbers in an array can add up to the largest number 
// in the array, we can use a recursive approach to check all possible combinations of numbers.

// Solution 1:
function arrayAdditionS1(arr){
    // Sort the array in ascending order and remove the largest number
    const target = arr.sort((a,b) => a-b).pop();
    // Check if any combination of numbers in array (excluding the largest number)
    // can be added up to equal to the largest number
    function isContains(arr, target){
        // Check if array is non-empty
        if(arr.length === 0){
            return target === 0
        }
        var head = arr[0];
        var tail = arr.slice(1);
        return isContains(tail, target - head) || isContains(tail, target);
    }

    return isContains(arr, target);
}
console.log(' --------------- #05-01: Array Addition --------------- ');
console.log(`Solution 1: input: ${[5,7,16,1,2]}, output: `+ arrayAdditionS1([5,7,16,1,2])); // Output: false
console.log(`Solution 1: input: ${[3,5,-1,8,12]}, output: `+ arrayAdditionS1([3,5,-1,8,12])); // Output: true
console.log(`Solution 1: input: ${[1, 2, 3, 4, 6]}, output: `+ arrayAdditionS1([1, 2, 3, 4, 6])); // Output: true

// Solution 2: Easy
function arrayAdditionS2(arr) {
    // Find the largest number in the array
    const maxNum = Math.max(...arr);
    // Remove the largest number from the array
    arr = arr.filter(num => num !== maxNum);
    
    // Helper function to check if any combination adds up to the target
    function canSum(target, nums) {
        if (target === 0) return true;
        if (target < 0) return false;
        
        for (let i = 0; i < nums.length; i++) {
            const remaining = target - nums[i];
            const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
            if (canSum(remaining, remainingNums)) {
                return true;
            }
        }
        return false;
    }
    
    // Check if we can sum to the maxNum using the remaining numbers
    return canSum(maxNum, arr);
}
// Example usage:
console.log(' --------------- #05-02: Array Addition --------------- ');
console.log(`Solution 2: input: ${[5,7,16,1,2]}, output: `+ arrayAdditionS2([5,7,16,1,2])); // Output: false
console.log(`Solution 2: input: ${[3,5,-1,8,12]}, output: `+ arrayAdditionS2([3,5,-1,8,12])); // Output: true
console.log(`Solution 2: input: ${[1, 2, 3, 4, 6]}, output: `+ arrayAdditionS2([1, 2, 3, 4, 6])); // Output: true
