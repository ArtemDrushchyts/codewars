function flattenAndSort(array) {
    return array.reduce((a, b) => a.concat(b)).sort((a, b) => {
        return a - b
    })
}
