// Distinct List - Interview Assessment
// Remove duplicate elements from an array 
function distinctList(arr){
    let list = new Set();
    let duplicateCount = 0;

    for(let i = 0; i < arr.length; i++){
        if(list.has(arr[i])){
            duplicateCount++;
        }else{
            list.add(arr[i]);
        }
    }

    return duplicateCount;
}
console.log(' --------------- #34: Distinct List - Interview Assessment --------------- ');
console.log(`Solution: input: arr=[0,-2,-2,5,5,5], output: `+ distinctList([0,-2,-2,5,5,5])); // Output: 3
console.log(`Solution: input: arr=[100,2,101,4], output: `+ distinctList([100,2,101,4])); // Output: 0