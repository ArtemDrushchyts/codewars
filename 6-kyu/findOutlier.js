function findOutlier(integers){
    let even = integers.filter(function(num) {
        return num%2 === 0;
    })
    let odd = integers.filter(function(num) {
        return num%2 !== 0;
    })
    if(even.length == 1) {
        return even[0];
    } else {
        return odd[0];
    }
}