## HTTP服务
![http](img/http.png)

HTTP服务要做什么事情？
- 解析进来的HTTP请求报文
- 返回对应的HTTP返回报文


简单的HTTP服务器
``` js
const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
    console.log('http://localhost:3000/')

    console.log(req.headers)
    

    res.writeHead(200)
    fs.createReadStream(__dirname+'/index.html')
        .pipe(res)

}).listen(3000)
```

## Koa

``` js
const koa = require('koa')
const fs = require('fs')
const mount = require('koa-mount')
const app = new koa()

app.use(
    mount('/favicon.ico', function (ctx) {
        ctx.status = 200
    })
)



const gameKoa = new koa()
app.use(
    mount('/game',gameKoa)
)
gameKoa.use(
    async function (ctx, next) {
        const start = Date.now();
        await next();
        const ms = Date.now() - start;
        console.log('运行时间',ms)
        
    },
)
gameKoa.use(
    async function (ctx, next) {
        const query = ctx.query
        const type = query.type
        ctx.curType = type
        
        await next()
    }
)
gameKoa.use(
    async function (ctx, next) {

        console.log('ctx',ctx.curType)
        ctx.body = JSON.stringify({type:ctx.curType})
    }
)

app.use(
    mount('/', (ctx) => {
        console.log("http://localhost:3000/")
        ctx.status = 200
        ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8')
    })
)


app.listen(3000)
```

## RPC
Remote Procedure Call 远程过程调用
**与AJAX的相同点**
- 两个计算机的网络通信
- 双方约定一个数据格式
  
**不同点**
- 不一定使用DNS
- 应用层协议一般不使用HTTP
- 基于TCP或UDP

## Buffer
编解码二进制数组
安装protocol-buffers `npm install protocol-buffers`

设置数据模式 test.proto文件
```
message Column{
    required int32 id = 1;
    required string name = 2;
    required float price = 3;
}
```
编码与解码
``` js
const fs = require('fs')
const protobuf = require('protocol-buffers')
const schema = protobuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8'))

console.log(schema)

// 编码encode
const newBuffer = schema.Column.encode({
    id:1,
    name:"winfy",
    price:99.9
})

// 解码decode
console.log(schema.Column.decode(newBuffer))
```