function findFileExtension (file) {
    let extensionArray = ["css","html","svg","jpg","js","png"]

    for (let count = 0;count<extensionArray.length;count++) {
        if (file.search(extensionArray[count]) > 0) {
            return extensionArray[count]
        }
    }
}

module.exports = {findFileExtension}