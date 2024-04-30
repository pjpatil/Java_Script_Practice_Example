let nums = [];

nums[0] = 2;
nums[50] = 60;

// console.log(nums);  // [ 2, <49 empty items>, 60 ]

for (let n of nums) {
    console.log(n);
}


// for (let key in nums) {
//     console.log(nums[key]);
// }

