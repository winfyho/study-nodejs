const net = require('net')

const server = net.createServer((socket) => {
    socket.on('data', (buffer) => {
        // console.log(buffer, buffer.toString())
        const id = buffer.readInt32BE()
        setTimeout(() => {
            console.log(data[id])

            socket.write(
                
                Buffer.from(data[id])
            )
        }, 500);

    })
})

server.listen(4000)

const data = {
    100: "001你好",
    101: "101你好",
    102: "201你好",
    103: "301你好",
    104: "401你好",
}