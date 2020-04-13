console.log('lib module')

exports.hello = 'name'

exports.add = function(a,b){
    return a+b
}

exports.obj = {
    name:'obj'
}


// 覆盖上面的exports
module.exports = {
    name:"lib",
    data:"origin"
}