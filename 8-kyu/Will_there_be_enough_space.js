function enough(cap, on, wait) {
    let arr = cap - on - wait;
    if (arr >= 0) {
        return 0;
    } else {
        return -arr
    }
}