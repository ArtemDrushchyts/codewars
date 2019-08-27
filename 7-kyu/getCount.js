function getCount(str) {
    var vowelsCount = 0;

    let a = str.split('');
    for(let i =0 ; i< a.length; i++) {
        if(a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u') {
            vowelsCount++;
        }
    }

    return vowelsCount;
}