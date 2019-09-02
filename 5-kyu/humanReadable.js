function humanReadable(seconds) {
    let hours = Math.floor(seconds/3600);
    let minuts = Math.floor((seconds%3600)/60);
    let second = Math.floor((seconds%3600)%60);
    if(hours < 10) {
        hours = '0' + hours;
    }
    if (minuts < 10) {
        minuts = '0' + minuts;
    }
    if(second < 10 ) {
        second = '0' + second
    }
    return `${hours}:${minuts}:${second}`
}