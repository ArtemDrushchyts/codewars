function nextVersion(version) {
    let a = version.split('.');
    for(let i = a.length-1; i >= 0; i--) {
        console.log(a[i]);

    }
    // return 
}

console.log(nextVersion("1.2.3"));