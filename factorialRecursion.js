// Factorial using Recursion of js.
function fact(n) {
    if (n == 0)
        return 1;
    else
        return n * fact(n - 1);

}

var num = 170;     // number range in 170 ,
var result = fact(num);

console.log(result);       // output :120