function range(start, end, step) {
    if (end === undefined) {
      end = start || 0; start = 0;
    }
  
    step = isNaN(step) ? 1 : step;
    let size = Math.ceil((end - start) / (step || 1));
    let result = [];
    for (let i = 0; i < size; i++) {
      result[i] = start + i * step;
    }
  
    return result;
}