// Seating Students
// The challenge determines how many different ways students can sit next to each other
function seatingStudents(arr) {
    const desks = arr[0]; // number of desks
    const occupiedSeats = new Set(arr.slice(1)); // occupied seats
    let count = 0; // to count possible pairings of seats

    // Loop through each desk
    for (let i = 1; i <= desks; i++) {
        if (!occupiedSeats.has(i)) {
            // Check if the current seat is unoccupied
            
            // Check the seat to the right
            if (i % 2 === 1 && !occupiedSeats.has(i + 1) && i + 1 <= desks) {
                count++;
            }

            // Check the seat below
            if (i <= desks - 2 && !occupiedSeats.has(i + 2)) {
                count++;
            }
        }
    }
    return count; // Return the number of possible pairings
}
// Example usage:
console.log(' --------------- #10: Seating Students --------------- ');
console.log(`Solution: input: ${[6, 4]}, output: `+ seatingStudents([6, 4])); // Output: 4
console.log(`Solution: input: ${[8, 1, 8]}, output: `+ seatingStudents([8, 1, 8])); // Output: 6
