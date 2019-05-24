function compose(...fns) {
    return (arg) => fns.reduceRight((compose, f) => f(compose), arg);
}