function zero(func) {
    if (func === undefined) return 0
    else return func(0)
}
function one(func) {
    if (func === undefined) return 1
    else return func(1)
}
function two(func) {
    if (func === undefined) return 2
    else return func(2)
}
function three(func) {
    if (func === undefined) return 3
    else return func(3)
}
function four(func) {
    if (func === undefined) return 4
    else return func(4)
}
function five(func) {
    console.log(func);
    if (func === undefined) return 5
    else return func(5)
}
function six(func) {
    if (func === undefined) return 6
    else return func(6)
}
function seven(func) {
    if (func === undefined) return 7
    else return func(7)
}
function eight(func) {
    if (func === undefined) return 8
    else return func(8)
}
function nine(func) {
    if (func === undefined) return 9
    else return func(9)
}

function plus(number) {

    return function (current) {
        return current + number
    }
}
function minus(number) {
    return function (current) {
        return current - number
    }
}
function times(number) {
    console.log(number);
    return function (current) {
        console.log(current * number)
        return current * number
    }
}
function dividedBy(number) {
    return function (current) {
        return Math.floor(current / number)
    }
}