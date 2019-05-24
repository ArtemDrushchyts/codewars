function createMessage(a) {
    let message = a;

    function sum(b) {
        if (typeof (b) === "undefined") {
            return message;
        } else {
            message += ' ' + b;
        }
        return sum;
    }
    sum.toString = function () {
        return message;
    }

    return sum;
}