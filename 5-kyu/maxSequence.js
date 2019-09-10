var maxSequence = function(arr){
    let currentMax = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i += 1) {
        currentMax = Math.max(0, currentMax + arr[i]);
        max = Math.max(max, currentMax);
    }
    return max;
}