function solution(str) {
    return str.length % 2 == 0 ? str.match(/.{2}/g) : (str + '_').match(/.{2}/g);
}