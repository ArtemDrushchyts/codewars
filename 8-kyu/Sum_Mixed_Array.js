function sumMix(x) {
    return x.reduce((sum, current) => {
        return Number(sum) + Number(current)
    });
}