var capitals = function (word) {
	return word
    .replace(/[A-Z]/g, (_, i) => i)
    .split('')
    .map(char => Number(char))
    .filter(char => Number.isInteger(char))
};