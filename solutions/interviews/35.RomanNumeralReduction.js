// Roman Numeral Reduction - Interview Assessment
// Reducing a string of roman numerals
function romanNumeralReduction(str){
    const romanNumerals = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50, 
        'X': 10, 
        'V': 5, 
        'I': 1
    };

    let sum = 0;
    str.split("").forEach(letter => {
        sum += romanNumerals[letter]
    });

    let result = '';
    Object.entries(romanNumerals).forEach(value => {
        // calculate how many times the roman numeral can be used
        let num = Math.floor(sum / value[1]);
        // Subtract the used portion of the sum
        sum -= num * value[1];

        result += value[0].repeat(num);
    });

    return result;
}
console.log(' --------------- #35: Roman Numeral Reduction - Interview Assessment --------------- ');
console.log(`Solution: input: str="XXXVVIIIIIIIIII", output: `+ romanNumeralReduction("XXXVVIIIIIIIIII")); // Output: L
console.log(`Solution: input: str="DDLL", output: `+ romanNumeralReduction("DDLL")); // Output: MC