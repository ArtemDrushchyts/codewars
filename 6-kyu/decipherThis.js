function decipherThis(str) {
    let r = /\d+/;
    let a = str.split(' ').reduce((a, elem) => a + ' ' + elem.replace(r, String.fromCharCode(elem.match(r)))
        .replace(/^(.)(.)(.*)(.)$/, '$1$4$3$2'), '');

    return a.trim()
}; 