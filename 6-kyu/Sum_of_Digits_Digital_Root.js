function digital_root(n) {
    let sum = 0;

    if (Number.isInteger(n) === false) {
        return sum;
    }
    let str = n.toString();

    for (let i = 0; i <= str.length - 1; i++) {
        sum += +str[i];
    }
    if (sum.toString().length >= 2) {
        sum = digital_root(sum);
        return sum;
    }

    return sum;
}