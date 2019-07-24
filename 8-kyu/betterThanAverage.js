function betterThanAverage(classPoints, yourPoints) {
   let num =  classPoints.reduce((elem, cur) => elem + cur);
   return (num/classPoints.length > yourPoints) ? false : true
};
