function sumConsecutives(s) {
    let arr = [];
    let sum = 0;
    s.forEach((num, i, array) => {
        sum += num;
        if (num != array[i + 1]) {
            arr.push(sum);
            sum = 0;
        }
    })
    return arr;
}

console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1]));