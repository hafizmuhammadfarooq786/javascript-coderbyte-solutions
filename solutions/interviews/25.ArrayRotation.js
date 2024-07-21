// Array Rotation - Interview Assessment
function arrayRotation(arr){
    // Store the integer value of the first element of the array as a number of rotations
    const num = arr[0];
    const result = [];
    for(let i = num; i < arr.length; i++){
        result.push(arr[i]);
    }

    // if there are still elements in the original array that haven't been pushed to result array
    if(num > 0){
        for(let i = 0; i < num; i++){
            result.push(arr[i]);
        }
    }

    return result.join("");

}
console.log(' --------------- #25: Array Rotation - Interview Assessment --------------- ');
console.log(`Solution: input: arr=[3,2,1,6], output: `+ arrayRotation([3,2,1,6])); // Output: 6321
console.log(`Solution: input: arr=[4,3,4,3,1,2], output: `+ arrayRotation([4,3,4,3,1,2])); // Output: 124343