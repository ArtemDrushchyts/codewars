function array(arr) {
    let a = arr.split(','); //преобразуем в массив
    if (a.length < 3) {
        return null;
    }
    let b = [];
    for (let i = 0; i < a.length; i++) {
        if (i >= 1 && i < a.length - 1) {
            b.push(a[i]);
        }
    }
    return b.join(' '); //добавляем пробелы между элемеетами и преобразуем в строку
}