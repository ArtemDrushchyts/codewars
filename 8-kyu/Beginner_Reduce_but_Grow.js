function grow(x) {
    let res;
    if (x.length > 0) {
        res = x.reduce((sum, curent) => {
            return sum * curent
        })
    }
    return res
}