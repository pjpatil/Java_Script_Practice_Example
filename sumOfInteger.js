
/*1) Write a Javacript program to compute the sum of the two given integers. If the 
two values are the same, then return triple their sum. (by using Internal 
JavaScript)
*/
function sumNumbers(n1, n2) {
    if (n1 === n2) {
        return 3 * (n1 + n2);
    }
    else {
        return n1 + n2;
    }

}
let result = sumNumbers(4, 4);

console.log("sum of is " + result);