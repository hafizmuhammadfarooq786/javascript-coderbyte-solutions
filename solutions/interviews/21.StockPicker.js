// Stock Picker - Interview Assessment
// Determine the maximum profit that can be made in a range of stock prices.
function stockPicker(arr) { 
    var profit=-1;
    var buyPrice=arr[0]; // Buying price to the first element of the array
    for(var i=1; i<arr.length; i++){ // Loop through the array starting from the second element
        if(arr[i]<buyPrice){ // If the current element is smaller than the buying price
            buyPrice=arr[i]; // Update the buying price
        }
        else if( (arr[i]-buyPrice) > profit){ // If selling the stock at the current price will give a greater profit than the previous maximum profit
            profit=arr[i]-buyPrice; // Update the maximum profit
        }
    }
    
  return profit;
}
console.log(' --------------- #21: Stock Picker - Interview Assessment --------------- ');
console.log(`Solution: input: arr=[10,12,4,5,9], output: `+ stockPicker([10,12,4,5,9])); // Output: 5
console.log(`Solution: input: arr=[14,20,4,12,5,11], output: `+ stockPicker([14,20,4,12,5,11])); // Output: 8
