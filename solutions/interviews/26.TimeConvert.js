// Time Convert - Interview Assessment
// Determine the difference in hours and minutes between two given times
function timeConvert(num){
    const hours = Math.floor(num / 60);
    const minutes = num % 60;

    return hours + ":" + minutes;
}
console.log(' --------------- #26: Time Convert - Interview Assessment --------------- ');
console.log(`Solution: input: num=126, output: `+ timeConvert(126)); // Output: 2:6
console.log(`Solution: input: num=45, output: `+ timeConvert(45)); // Output: 0:45