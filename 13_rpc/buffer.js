// const Buffer = require('buffer')
const buffer1 = Buffer.from('geek')
const buffer2 = Buffer.from([1, 2, 3, 4])
console.log(buffer1)
console.log(buffer2)

// buffer2.writeInt8(12,1)
// console.log(buffer2)

buffer2.writeInt16BE(512, 2)
console.log(buffer2)

buffer2.writeInt16LE(512, 2)
console.log(buffer2)

const fs = require('fs')
const protobuf = require('protocol-buffers')
const schema = protobuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8'))

console.log(schema)

const newBuffer = schema.Column.encode({
    id:1,
    name:"winfy",
    price:99.9
})
console.log(schema.Column.decode(newBuffer))

