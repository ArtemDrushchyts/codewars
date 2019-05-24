function isSantaClausable(obj) {
    if (typeof obj === 'object') { console.log('objectsss') } else { return false; }
    let a = 'sayHoHoHo';
    let b = 'distributeGifts';
    let c = 'goDownTheChimney';

    if ((a in obj) === true && (b in obj) === true && (c in obj) === true) { } else { return false }
    if (typeof obj.sayHoHoHo === "function" || typeof obj.distributeGifts === "function" || typeof obj.goDownTheChimney === "function") {
        console.log('true');
        return true;
        //         }
    } else {
        console.log('false');
        return false;
    }
}