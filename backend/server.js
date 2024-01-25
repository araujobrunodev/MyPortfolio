const http = require("http")
const fs = require("fs")
const {readPath} = require("./readFile")
const {findFileExtension} = require("./findFileExtension")
const port = 2020

http.createServer(function (request,response) {
    let Path = request.url
    let fileExtension = findFileExtension(Path) 

    switch (fileExtension) {
        case "svg":
            response.writeHead(200, {"Content-Type":"image/svg+xml"})
            response.write(readPath("."+Path))
            response.end()
            break;

        case "png":
            fs.readFile("."+Path, function (err,data) {
                if (err) return console.error(err)
                response.writeHead(200, {"Content-Type":"image/png"})
                response.write(data)
                response.end()
            })
            break;

        case "jpg":
            fs.readFile("."+Path, function (err,data) {
                if (err) return console.error(err)
                response.writeHead(200, {"Content-Type":"image/jpeg"})
                response.write(data)
                response.end()
            })
            break;

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