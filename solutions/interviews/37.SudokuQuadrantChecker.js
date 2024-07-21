// Sudoku Quadrant Checker - Interview Assessment
// Checking if Sudoku board is legal.
function sudokuQuadrantChecker(strArr) {
    // Convert the input string array into a 2D array representation of the Sudoku board
    const board = strArr.map(row => row.substr(1, row.length - 2).split(','));
    let errors = {}    
    
    // Iterate through each row and column of the board
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if(board[row][col] === "x"){
                continue;
            }

            // Calculate the current quadrant number
            let quadrant = Math.floor(row/3) * 3 + Math.floor(col/3) + 1;

            // Check for errors in the current row
            for(let i = 0; i < board.length; i++ ){
                if(i !== col){
                    if(board[row][i] === board[row][col]){
                        errors[quadrant] = 1;
                    }
                }
            }

           // Check for errors in the current column
            for(let i = 0; i < board.length; i++ ){
                if(i !== row){
                    if(board[i][col] === board[row][col]){
                        errors[quadrant] = 1;
                    }
                }
            }

            // Check for error in the current 3x3 box
            for (let r = 0; r < 3; r++){
                for (let c = 0; c < 3; c++){
                    let rowQuadrant = Math.floor(row / 3);
                    let colQuadrant = Math.floor(col / 3);

                    if(  board[row][col] === board[rowQuadrant * 3 + r][colQuadrant * 3 + c]){
                        if( row !==  rowQuadrant * 3 + r && col !== colQuadrant * 3 + c){
                            errors[quadrant] = 1;
                        }
                    }
                }
            }

        }
    }

    if(Object.keys(errors).length === 0){
        return "legal"
    }

    return Object.keys(errors).join(",");
}

console.log(' --------------- #37: Sudoku Quadrant Checker - Interview Assessment --------------- ');
console.log(`Solution: input: strArr=[
    "(1,2,3,4,5,6,7,8,1)", "(x,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)",
    "(1,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)"
], output: `+ sudokuQuadrantChecker([
    "(1,2,3,4,5,6,7,8,1)", "(x,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)",
    "(1,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)"
])); // Output: 1,3,4
console.log(`Solution: input: strArr=[
    "(1,2,3,4,5,6,7,8,9)", "(x,x,x,x,x,x,x,x,x)", "(6,x,5,x,3,x,x,4,x)",
    "(2,x,x,1,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,9)"
], output: `+ sudokuQuadrantChecker([
    "(1,2,3,4,5,6,7,8,9)", "(x,x,x,x,x,x,x,x,x)", "(6,x,5,x,3,x,x,4,x)",
    "(2,x,x,1,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,x)", "(x,x,x,x,x,x,x,x,9)"
])); // Output: 3,9