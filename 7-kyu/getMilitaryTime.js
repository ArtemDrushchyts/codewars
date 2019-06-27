var getMilitaryTime = function (input) {
    let a = input.slice(-2);
    let b = input.slice(0, 2);
    if (a == 'PM') {
        if (b == 12) {
            return input.slice(0, 8);
        } else {
            return input.replace(b, +b + 12).slice(0, 8);
        }

    } else {
        if (b == 12) {
            return input.replace(b, '00').slice(0, 8);
        } else {
            return input.slice(0, 8);
        }
    }
}
console.log(getMilitaryTime('12:00:01PM'));