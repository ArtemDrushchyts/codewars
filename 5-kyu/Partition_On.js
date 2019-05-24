function partitionOn(pred, items) {
    let a = items.filter(pred);
    for (var i = 0; i < items.length; i++) {
        while (pred(items[i])) {
            items.splice(i, 1);
        }
    }
    for (let i = 0; i < a.length; i++) {
        items.splice(items.length, 0, a[i]);
    }

    console.log(a, items, items.findIndex(pred));

    return items.findIndex(pred);
}