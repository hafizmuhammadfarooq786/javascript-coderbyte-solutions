// Most-Free Time
// Determine what period of the day gives you the most free time.
function mostFreeTime(strArr){
    var minArr = []
    var longest = 0
    
    // Convert a time string to minutes
    function timeCalc(time) {
        var min = 0
        // Add 12 hours (720 minutes) for pm times
        if(time.match(/pm/i)) {
            min += 720
        }
        // Add the hours converted to minutes
        if(time.split(':')[0] !== '12') {
           min += time.split(':')[0] * 60
        } 
        // Add the minutes
        min += Number(time.split(':')[1].match(/[0-9][0-9]/)[0])
        return min
    }
    
    // Loop through the array of events and convert each time to minutes
    for(var i = 0; i < strArr.length; i++) {
        var time1 = strArr[i].split('-')[0]
        var time2 = strArr[i].split('-')[1]
        minArr.push([timeCalc(time1), timeCalc(time2)])
    }    
    
    // Sort the array of minutes in ascending order
    minArr.sort(function(a, b) {
        return a[0] - b[0]
    })
    
    // Loop through the sorted array and find the longest free time
    for(var j = 0; j < minArr.length - 1; j++) {
        if(longest < minArr[j + 1][0] - minArr[j][1]) {
            longest = minArr[j + 1][0] - minArr[j][1]
        }
    }
    
    // Convert the longest free time to hours and minutes
    var hours = 0
    while(longest >= 60) {
        longest -= 60;
        hours ++
    }
    
    // Add a leading zero if necessary for single-digit minutes and hours
    if(hours.toString().length === 1) {
        hours = "0" + hours
    }
    if(longest.toString().length === 1) {
        return hours + ":0" + longest
    } else {
        return hours + ":" + longest
    }

}
// Example usage:
console.log(' --------------- #19: Most-Free Time --------------- ');
console.log(`Solution: input strArr=["12:15PM-02:00PM", "09:00AM-10:00AM",
    "10:30AM-12:30PM"], output: `+ mostFreeTime(["12:15PM-02:00PM", "09:00AM-10:00AM",
    "10:30AM-12:30PM"])); // Output: 00:30
console.log(`Solution: input strArr=["12:15PM-02:00PM", "09:00AM-12:11PM",
    "02:02PM-04:00PM"], output: `+ mostFreeTime(["12:15PM-02:00PM", "09:00AM-12:11PM",
    "02:02PM-04:00PM"])); // Output: 00:04