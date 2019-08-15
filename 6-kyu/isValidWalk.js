function isValidWalk(walk) {
    const east = walk.filter(d => d === 'e').length;
    const west = walk.filter(d => d === 'w').length;
    const north= walk.filter(d => d === 'n').length;
    const south = walk.filter(d => d === 's').length;
    if(east === west && north === south && walk.length === 10) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']);