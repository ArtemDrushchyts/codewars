function crossProduct(vector1, vector2) {
    console.log(vector1, vector2);
    if (!!!vector1 || !!!vector2) { throw "Arguments are not 3D vectors!"; }
    let arr = [];
    if (vector1.length == 3 && vector2.length == 3) {
        arr[0] = vector1[1] * vector2[2] - vector1[2] * vector2[1];
        arr[1] = vector1[2] * vector2[0] - vector1[0] * vector2[2];
        arr[2] = vector1[0] * vector2[1] - vector1[1] * vector2[0];
    }
    else {
        throw "Arguments are not 3D vectors!";
    }
    return arr;
}