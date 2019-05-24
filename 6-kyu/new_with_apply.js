function construct(Class) {
    console.log(arguments.length);
    let obj = {};
    obj.__proto__ = Class.prototype;

    let a = [];
    for (let i = 1; i < arguments.length; i++) {
        a.push(arguments[i]);
    }
    console.log(arguments[0]);
    Class.apply(obj, a);
    return obj;
}