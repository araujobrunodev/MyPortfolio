const http = require("http")
const {readPath} = require("./readFile")
const {findFileExtension} = require("./findFileExtension")
const port = 2020

http.createServer(function (request,response) {
    let Path = request.url
    let fileExtension = findFileExtension(Path) 

    switch (fileExtension) {
        case "css":
            response.writeHead(200, {"Content-Type":"text/css"})
            response.write(readPath("."+Path))
            response.end()
            break;
        default: 
            response.writeHead(200, {"Content-Type":"text/html"})
            response.write(readPath("./index.html"))
            response.end()
            break;
    }
}).listen(port)

console.log(`http://localhost:${port}`)