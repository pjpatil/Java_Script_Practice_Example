

var map = new Map();

map.set("Pankaj", "Java");
map.set("Kiran", "Android");
map.set("Chirag", "ML");
map.set("pawan", "sql");

// console.log(map.keys());
// console.log(map.get("Chirag"));

// for (let [k, v] of map) {
//     console.log(k, " : ", v);
// }

map.forEach((v,k)=>{
    console.log(k," : ",v);
});