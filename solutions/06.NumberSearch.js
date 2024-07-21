// Number Search

// Problem 1:
// The challenge typically involves finding a specific number in a two-dimensional grid of numbers. 
// You might need to search for this number using various algorithms, depending on the constraints of the problem.
function numberSearchFromGrid(grid, target) {
    const rows = grid.length;
    const cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === target) {
                return true; // Target found
            }
        }
    }

    return false; // Target not found
}
// Example usage:
const grid1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const grid2 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
const target1 = 5;
const target2 = 25;
console.log(' --------------- #06-1: Number Search --------------- ');
console.log(`Problem 1, Solution: output: `+ numberSearchFromGrid(grid1, target1)); // Output: true
console.log(`Problem 1, Solution: output: `+ numberSearchFromGrid(grid2, target2)); // Output: false

// Problem 2:
// The challenge, you need to traverse a string to find all numbers and then sum them up, 
// you can use regular expressions to extract the numbers from the string and then sum them.
function numberSearchFromString(str) {
    // Use a regular expression to find all numbers in the string
    const numbers = str.match(/\d+/g);
    
    if (numbers === null) {
        return 0; // No numbers found
    }
    // Convert the array of number strings to integers and sum them up
    return numbers.reduce((prev, current) => prev + parseInt(current), 0);
}
// Example usage:
console.log(' --------------- #06-2: Number Search --------------- ');
console.log(`Problem 2 Solution: input: ${"The 12 apples cost 25 dollars and 5 cents"}, output: `
    + numberSearchFromString("The 12 apples cost 25 dollars and 5 cents")); // Output: 42
console.log(`Problem 2 Solution: input: ${"No numbers here"}, output: `
    + numberSearchFromString("No numbers here!")); // Output: 0
console.log(`Problem 2 Solution: input: ${"Year 2024 will be followed by 2025"}, output: `
    + numberSearchFromString("Year 2024 will be followed by 2025.")); // Output: 4049
