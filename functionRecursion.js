
var num = 1;
function show() {
    console.log("hii", num);

    num++;
    if (num <= 10) {
        show();

    }
}

// function abc() {
//     console.log("hello..");    
// }
// abc();

show();