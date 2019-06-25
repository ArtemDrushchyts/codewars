function spinWords(a) {
    return a.split(' ').map(item => item.length > 4 ? item.split('').reverse().join('') : item).join(' ');
}

console.log(spinWords("Hey fellow warriors"));