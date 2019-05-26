function narcissistic(value) {
    let digits = value.toString()
        .split("")
        .map(num => parseInt(num))

    let b = digits.reduce((sum, num) => sum + Math.pow(num, digits.length), 0)

    if (value == b) {
        return true;
    } else {
        return false;
    };
}
