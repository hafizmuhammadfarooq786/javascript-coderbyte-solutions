// Letter Count
// Determine which word has the greatest number of repeated letters
function letterCount(str){
    const words = str.split(' ');
    let maxWord = '';
    let maxCount = 1

    for(let i=0; i < words.length; i++){
        const counts = {};
        let count = 0;

        for(j = 0; j < words[i].length; j++){
            const char = words[i][j];
            counts[char] = counts[char] ? counts[char] + 1 : 1;
            if(counts[char] > count){
                count = counts[char];
            }
        }

        if(count > maxCount){
            maxCount = count;
            maxWord = words[i];
        }
    }

    return maxWord || -1
}
// Example usage:
console.log(' --------------- #15: Letter Count --------------- ');
console.log(`Solution: input str=Hello Apple Pie, output: `+ letterCount("Hello apple pie")); // Output: Hello
console.log(`Solution: input str=No Words, output: `+ letterCount("No words")); // Output: -1
console.log(`Solution: input str=Underrated Protocol, output: `+ letterCount("Underrated Protocol")); // Output: Analysis
