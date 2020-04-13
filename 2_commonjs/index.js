const lib = require('./lib.js')
// 默认是一个空对象
console.log("orginlib",lib)

// 导出的是一个引用
lib.newProp = {
    msg:'hello'
}

console.log("旧的lib",lib)
const newLib = require('./test.js')
// process.stdin.on('data',e=>{
//     console.log(e.toString().trim())
    
// })