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
    mount('/game', gameKoa)
)
gameKoa.use(
    async function (ctx, next) {
        const start = Date.now();
        await next();
        const ms = Date.now() - start;
        console.log('运行时间', ms)

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

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('ctx', ctx.curType)
                ctx.body = JSON.stringify({ type: ctx.curType })
                resolve(ctx.curType)
            }, 500);
        })
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