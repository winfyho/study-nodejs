const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
    console.log('http://localhost:3000/')

    console.log(req.headers)
    

    res.writeHead(200)
    fs.createReadStream(__dirname+'/index.html')
        .pipe(res)

}).listen(3000)