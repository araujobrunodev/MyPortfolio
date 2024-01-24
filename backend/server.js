const http = require("http")
const {readPath} = require("./readFile")
const port = 2020

http.createServer(function (request,response) {
    switch (request.url) {
        default: 
            response.writeHead(200, {"Content-Type":"text/html"})
            response.write(readPath("./index.html"))
            response.end()
            break;
    }
}).listen(port)

console.log(`http://localhost:${port}`)