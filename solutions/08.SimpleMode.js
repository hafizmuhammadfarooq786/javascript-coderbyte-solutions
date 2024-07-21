// Simple Mood
function simpleMode(arr) {
    const count = {};
    const firstOccurence = {};
    let maxCount = 0;
    let mode = -1;
    for (let i=0; i < arr.length; i++) {
        const num = arr[i];
        if(num in count){
            count[num]++;
        }else{
            count[num] = 1;
            firstOccurence[num] = i;
        }

        if (count[num] > maxCount || (count[num] === maxCount && 
            firstOccurence[num] < firstOccurence[mode]

        )) {
            maxCount = count[num];
            mode = Number(num);
        }
    }

    return (maxCount > 1) ? mode : -1;
}
// Example usage:
console.log(' --------------- #08: Simple Mood --------------- ');
console.log(`Solution: input: ${[5, 5, 2, 2, 1]}, output: `+ simpleMode([5, 5, 2, 2, 1])); // Output: 5
console.log(`Solution: input: ${[2, 2, 5, 5, 1]}, output: `+ simpleMode([2, 2, 5, 5, 1])); // Output: 2
console.log(`Solution: input: ${[3, 4, 1, 6, 10]}, output: `+ simpleMode([3, 4, 1, 6, 10])); // Output: -1
