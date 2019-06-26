function nextVersion(version) {
    return version.split('.').forEach(element => {
        if (element == 9) {
            element = 0;
        }
    });
}

console.log(nextVersion("1.2.3"));