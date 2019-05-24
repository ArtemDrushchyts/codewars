function abbrevName(name) {
    let a = name.split(' ')
        .map(elem => elem[0].toUpperCase()).join('.')
    return a;
}