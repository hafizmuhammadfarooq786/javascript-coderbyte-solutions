// Word Split - Interview Assessment
// Attempt to split a long string of characters into actual words
function wordSplit(strArr){
    let word = strArr[0];
    let dict = strArr[1].split(',');
    const len = word.length;

    for(let i = 1; i <= len; i++){
        const w1 = word.substring(0,i);
        const w2 = word.substring(i, len);

        if(dict.includes(w1) && dict.includes(w2)){
            return `${w1},${w2}`;
        }

    }

    return "not possible"

}

console.log(' --------------- #30: Word Split - Interview Assessment --------------- ');
console.log(`Solution: input: strArr=["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"], output: 
`+ wordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"])); // Output: base,ball
console.log(`Solution: input: strArr=["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"], output: 
`+ wordSplit(["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"])); // Output: abcg,efd