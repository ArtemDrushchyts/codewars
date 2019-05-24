function sequence(n, pattern) {
    console.log(pattern);
    let arr = Array.from({ length: n }, (x, idx) => pattern);
    let arr2;
    if (pattern && {}.toString.call(pattern) === '[object Function]') {
        arr2 = Array.from({ length: n }, pattern);
        console.log(arr2);
    }
    console.log(arguments[0], arguments[1], arguments[2]);
    return pattern && {}.toString.call(pattern) === '[object Function]' ? arr2 : arr;
}