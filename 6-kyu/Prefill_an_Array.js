function prefill(n, v) {
    let arr = [];
    function isFloat(n) { return n === Number(n) && n % 1 !== 0 }
    if (n === 0 || n === '0') {
        return arr;
    } else if (isNaN(n) || n < 0 || Number.isInteger(n) === false) {
        throw new TypeError(n + ' is invalid');
    }

    else if (n > 0) {
        arr = Array.from({ length: n }, () => v);
        return arr;
    }
}