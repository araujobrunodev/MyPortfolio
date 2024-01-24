const http = require("http")
const port = 2020

http.createServer(function (request,response) {
    response.writeHead(200, {"Content-Type":"text/html"})
    response.write("<h1>ok<h1>")
    response.end()
}).listen(port)

console.log(`http://localhost:${port}`)