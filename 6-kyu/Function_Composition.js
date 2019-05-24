function compose(f, g) {
    let next = (...a) => f(g(...a));
    return next;
}