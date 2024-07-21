// Coin Determiner
// Determining the smallest combination of coins for a given output
function coinDeterminer(num){
    // Initialize count to 0
    var count = 0;
    
    // Subtract 11 from num as many times as possible
    while(num>10){
        if(num % 11 > 1 && num % 11 < 5){
            num -= 9; // If the remainder of num divided by 11 is between 2 and 4, subtract 9 instead of 11
        } else {
            num -= 11; // Subtract 11
        }
        count++;
    }
    
    // Subtract 9 from num as many times as possible
    while(num>8){
        if(num % 9 > 1 && num % 9 < 5){
            num -= 7; // If the remainder of num divided by 9 is between 2 and 4, subtract 7 instead of 9
        } else {
            num -= 9; // Subtract 9
        }
        count++;
    }
    
    // Subtract 7 from num as many times as possible
    while(num>6){
        num -= 7; // Subtract 7
        count++;
    }
    
    // Subtract 5 from num as many times as possible
    while(num>4){
        num -= 5; // Subtract 5
        count++;
    }
    
    // Subtract 1 from num as many times as possible
    while(num>0){
        num -= 1; // Subtract 1
        count++;
    }
    
    return count;
}
// Example usage:
console.log(' --------------- #18: Coin Determiner --------------- ');
console.log(`Solution: input num=6, output: `+ coinDeterminer(6)); // Output: 2
console.log(`Solution: input num=16, output: `+ coinDeterminer(16)); // Output: 2