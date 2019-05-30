function biggest(nums) {
    //code me
    return nums.map(item => item.toString()).sort().reverse()  //.reduce((a, b) => a + b);
    console.log(a);
};

console.log(biggest([121, 12]));
console.log(biggest([3, 30, 34, 5, 9])); //9534330