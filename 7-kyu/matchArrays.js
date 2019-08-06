function matchArrays(v,r){
    let count = 0;
    for(let i = 0; i < v.length; i++) {
        for(let j = 0; j < r.length; j++) {
            if(v[i] === r[j]) {
                count ++;
            }
        }
    }
    return count;
}

matchArrays(['incapsulation','OOP','array'],
    ['time', 'propert','paralelism','OOP']);