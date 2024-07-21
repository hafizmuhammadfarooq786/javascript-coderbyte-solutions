// Blackjack Highest
// Determine the highest cards within a hand in Blackjack
function blackjackHighest(strArr){
    let highest = -1;
    let highestCard = "";
    let total = 0;
    let hasAce = false;
    let cards = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
    for(let i = 0; i < strArr.length; i++){
        for(let j = 0; j < cards.length; j++){
            if(strArr[i] === cards[j]){
                total += values[j];
                if(j > highest){
                    highest = j;
                    highestCard  = cards[j]
                }

                if(j === 0){hasAce = true}
            }
        }
    }

    // If total value is above 21 and has ace, treat it as 1 instead of 11
    if(total <= 11 && hasAce){
        total += 10;
        highest = 11;
        highestCard = "ace";
    }

    // Determine the output based on the total value
    if(total < 21){    return `below ${highestCard}`}
    if(total > 21){    return `above ${highestCard}`}
    if(total === 21){  return `blackjack ${highestCard}`}

}
// Example usage:
console.log(' --------------- #14: Blackjack Highest --------------- ');
console.log(`Solution: input strArr=["four", "ace", "ten"]: `+ blackjackHighest(["four", "ace", "ten"])); // Output: below ten
console.log(`Solution: input strArr=["ace", "queen"], output: `+ blackjackHighest(["ace", "queen"])); // Output: blackjack ace
console.log(`Solution: input strArr=["two", "three", "ace", "king"], output: `+ blackjackHighest(["two", "three", "ace", "king"])); // Output: below king
