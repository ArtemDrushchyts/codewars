function persistence(num) {

    let count = 0;
    let arr = num.toString().split("");
    while (arr.length > 1) {

        let a = arr.reduce((a, b) => a * b);
        count++;
        arr = a.toString().split("");

    }

    return count;
}
