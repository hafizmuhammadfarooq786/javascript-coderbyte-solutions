// Bitmap Holes - Interview Assessment
// Searching within 2D Matrix
function bitmapHoles(strArr) {
    // declare an empty array to hold coordinates of all 0's
    var index = [],
        // initialize the number of holes to 0
        holes = 0,
        checker;
    // loop through each string in the array
    for (var i = 0; i < strArr.length; i++) {
        // split each string into individual characters
        strArr[i] = strArr[i].split('');
        // loop through each character
        for (var j = 0; j < strArr[i].length; j++) {
            // if the character is 0, add its coordinates to the index array
            if (strArr[i][j] === "0") {
                index.push([i, j]);
            }
        }
    }
    // loop through each coordinate in the index array
    for (var c = 0; c < index.length; c++) {
        checker = false;
        // loop through the remaining coordinates in the index array
        for (var k = c + 1; k < index.length; k++) {
            // if the two coordinates are adjacent, set the checker variable to true
            if (index[k][0] === index[c][0] + 1 && index[k][1] === index[c][1] || index[k][0] === index[c][0] && index[k][1] === index[c][1] + 1) {
                checker = true;
            }
        }
        // if the checker variable is still false, increment the holes variable
        if (checker === false) {
            holes += 1;
        }
    }
    // return the number of holes
    return holes;
}
console.log(' --------------- #22: Bitmap Holes - Interview Assessment --------------- ');
console.log(`Solution: input: arr=["01111", "01101", "00011", "11110"], output: `+ bitmapHoles(["01111", "01101", "00011", "11110"])); // Output: 3
console.log(`Solution: input: arr=["1011", "0010"], output: `+ bitmapHoles(["1011", "0010"])); // Output: 2
