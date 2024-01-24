const fs = require("fs")

const readPath = function (path) {
    return fs.readFileSync(path,"utf-8")
}

module.exports = {readPath}