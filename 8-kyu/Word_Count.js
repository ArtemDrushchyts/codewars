function countWords(str) {
    let arr = str.trim().split(/\s+/);
    if (arr[0] === "") {
        return 0;
    }
    return arr.length;
}