Object.prototype.hash = function (string) {
    var parts = string.split("."),
        length = parts.length,
        i,
        property = this;

    for (i = 0; i < length; i++) {
        if (property.hasOwnProperty(parts[i]) === false) { return undefined }
        else {
            property = property[parts[i]];
        }
    }

    return property;
}