function nouveau (Constructor, ...arguments) {
    const inst = Object.create(Constructor.prototype);
    const result = Constructor.apply(inst, arguments);

    return result === Object(result) ? result : inst;
    
    // return Reflect.construct(Constructor, arguments)
}