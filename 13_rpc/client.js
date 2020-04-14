const net = require('net')
const socket = new net.Socket({})

socket.connect({
    host: '127.0.0.1',
    port: 4000
})
// socket.write('good morning')

const list = [
    "100",
    "101",
    "102",
    "103",
    "104",
]
const buffer = Buffer.alloc(4)
const index = Math.floor(Math.random() * list.length)
buffer.writeInt32BE(
    list[index]
)
socket.write(buffer)

socket.on('data', (buffer) => {
    // console.log(index, buffer.toString())
    buffer = Buffer.alloc(4)
    const index = Math.floor(Math.random() * list.length)
    buffer.writeInt32BE(
        list[index]
    )
    socket.write(buffer)

})