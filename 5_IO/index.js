const glob = require('glob')

// console.time('glob')
// let result = glob.sync(__dirname+'/**/*')
// console.log(result)
// console.timeEnd('glob')


console.time('glob')
let result = null
glob(__dirname+'/**/*',function(err,res){
    result = res
    // console.log(result)
    console.log('run glob')
    
})
console.timeEnd('glob')
console.log(1+1)
