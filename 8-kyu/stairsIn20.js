function stairsIn20(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum += s[i].reduce((a, b) => a + b);
    }
    return sum * 20
}