/*1) Write a JavaScript function that takes an array of numbers and finds the second 
lowest and second greatest numbers, respectively.*/

let array = [1, 5, 3, 8, 9, 4];
let max = array[0];
let secMax = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        secMax = max;
        max = array[i];
    }
    else if (array[i] > secMax && array[i] < max) {
        secMax = array[i];
    }
}
// console.log(max);
console.log(secMax);
