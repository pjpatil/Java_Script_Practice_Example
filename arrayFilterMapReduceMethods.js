var nums = [15, 1, 4, 8, 9, 12, 3];           // array

var result = nums.filter(n => n % 2 === 0)        // filter method work only conditions 
    .map(n => n * 2)               // msp method work only operations  
    .reduce((a, b) => a + b);         // reduce(callbackfn:(previousValue, currentValue)

console.log(result);
