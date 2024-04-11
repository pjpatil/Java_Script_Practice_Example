/*
var names=new Set("bookeeper");

console.log(names);   // outpu: Set(6) { 'b', 'o', 'k', 'e', 'p', 'r' }
*/

var names = new Set();    // not allow duplicate value in set collection
names.add(3);
names.add(4);
names.add(3);
names.add("kiran");
names.add("Pankaj");
names.add("pawan");

names.forEach((value) => {
    console.log(value);
});


console.log(names.has("Pankaj"));    // .hash : is chech value is present or not retrun true/false