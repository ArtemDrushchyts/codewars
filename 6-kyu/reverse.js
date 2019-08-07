function reverseS(str){

    return str.trim().split(' ').map(function (cur, index) {
        return index%2 === 0 || index === 0 ? cur : cur.split('').reverse().join('');
    }).join(' ');
}


console.log(reverseS("Reverse this string, please!"));