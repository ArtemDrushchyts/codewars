Array.prototype.filter = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            arr.push(this[i]);
        }
    }
    return arr;
}