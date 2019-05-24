function points(games) {
    let sum = 0;
    games.forEach((elem, i, games) => {
        if (elem[0] > elem[2]) {
            sum += 3;
        } else if (elem[0] == elem[2]) {
            sum += 1;
        } else {
            sum += 0;
        }
    })
    return sum;
}