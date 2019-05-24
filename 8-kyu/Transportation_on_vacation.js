function rentalCarCost(d) {
    let prase = 40;
    if (d < 3) {
        return d * prase;
    }
    else if (d >= 7) {
        return d * prase - 50;
    }
    else if (2 < d < 7) {
        return d * prase - 20;
    }
}