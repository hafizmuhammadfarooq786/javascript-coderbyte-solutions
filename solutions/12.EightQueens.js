// Eight Queens
function eightQueens(strArr){
    // convert the string input into an array of coordinates
    const queens = strArr.map((coordinate) => {
        const x = parseInt(coordinate[1]);
        const y = parseInt(coordinate[3]);
        return { x, y }
    });

    // Check if any queens are attacking each other
    for (let i = 0; i < queens.length; i++){
        for (let j = i+1; j < queens.length; j++){
            const q1 = queens[i];
            const q2 = queens[j];

            if(q1.x === q2.x || q1.y === q2.y || Math.abs(q1.x - q2.x) === Math.abs(q1.y - q2.y)){
                // Queens are attacking each other, return the location of the first queen
                return `(${q1.x},${q1.y})`
            }
        }
    }
    return true;
}
// Example usage:
const queensInput1 = ["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"];
const queensInput2 = ["(2,1)", "(5,3)", "(6,3)", "(8,4)", "(3,4)", "(1,8)", "(7,7)", "(5,8)"];
console.log(' --------------- #12: Eight Queens --------------- ');
console.log(`Solution: input 1, output: `+ eightQueens(queensInput1)); // Output: (2,1)
console.log(`Solution: input 2, output: `+ eightQueens(queensInput2)); // Output: (5,3)