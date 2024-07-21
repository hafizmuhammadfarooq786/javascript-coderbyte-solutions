// Gas Station - Interview Assessment
// Determin whether a car can get around route with a limited amount of gas
function gasStation(strArr){
    let stations = parseInt(strArr[0]);

    // Loop through each gas station to check if it's possible travel aournd a whole route
    for(let i =0; i < stations; i ++){
        let gas = 0;
        // Loop through each gas station from the current starting point
        for(let j =0; j < stations; j ++){
            // Calculate the index of the current gas station
            let index = (i + j) % stations + 1;
            // Split the gas and distance values
            let data = strArr[index].split(":");
            // Add the gas at the current station and subtract the distance to the next station
            gas += parseInt(data[0]) - parseInt(data[1]);
            // If there is not enough gas to travel to the next station, break out of the loop
            if(gas < 0) break; 
        }
        // If there is enough gas to travel around the whole route, return the starting index
        if(gas >= 0){
            return i + 1;
        }
    }

    // If it is not possible to travel around the whole route, return "impossible"
    return "impossible";

}
console.log(' --------------- #24: Gas Station - Interview Assessment --------------- ');
console.log(`Solution: input: strArr=["4","1:1","2:2","1:2","0:1"], output: `+ 
    gasStation(["4","1:1","2:2","1:2","0:1"])); // Output: "impossible"
console.log(`Solution: input: strArr=["4","0:1","2:2","1:2","3:1"], output: `+ 
    gasStation(["4","0:1","2:2","1:2","3:1"])); // Output: "4"