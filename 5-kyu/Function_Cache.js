function cache(func) {
    var cache = {};
    return function () {
        var stamp = JSON.stringify(arguments);
        console.log(cache);
        if (!(stamp in cache)) {
            cache[stamp] = func.apply(this, arguments);
            console.log("call: " + cache[stamp]);
        }
        console.log("cache: " + cache[stamp] + "\n\n");
        return cache[stamp];
    }
}