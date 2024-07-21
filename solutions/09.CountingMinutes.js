// Counting Minutes
// Return the total number of minutes between two times
function countingMinutes(str){
    // Split the start and end time from the input string
    const [startTime, endTime] = str.split("-");
    function getMinutesFromMidnights(time){
        const [hours, minutes] = time.slice(0,-2).split(":");
        const isPM = time.slice(-2) === "pm";

        const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
        return isPM ? totalMinutes + 720 : totalMinutes
    }

    // Convert start and end times to minutes from midnight
    const startMinutes = getMinutesFromMidnights(startTime);
    const endMinutes = getMinutesFromMidnights(endTime);

    const timeDiff = (endMinutes - startMinutes + 1440) % 1440;
    return timeDiff;
}
// Example usage:
console.log(' --------------- #09: Counting Minutes --------------- ');
console.log(`Solution: input: ${"12:30pm-12:00pm"}, output: `+ countingMinutes("12:30pm-12:00pm")); // Output: 5
console.log(`Solution: input: ${"1:23am-1:08am"}, output: `+ countingMinutes("1:23am-1:08am")); // Output: 2
console.log(`Solution: input: ${"5:50pm-9:40pm"}, output: `+ countingMinutes("5:50pm-9:40pm")); // Output: -1
