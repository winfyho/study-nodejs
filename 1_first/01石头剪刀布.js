// console.log(__filename)
// console.log(__dirname)

// console.log(process)
console.log(process.argv)

var playerAction = process.argv[process.argv.length - 1]
console.log(playerAction)

var random = Math.random() * 3

if (random < 1) {
    var computerAction = 'zero'
    console.log(computerAction)
    
} else if (random > 2) {
    var computerAction = 'two'
    console.log(computerAction)
    
} else {
    var computerAction = 'five'
    console.log(computerAction)
    
}
if (computerAction === playerAction) {
    console.log('平局')
} else if (
    (computerAction === 'zero' && playerAction === 'five') ||
    (computerAction === 'two' && playerAction === 'zero') ||
    (computerAction === 'five' && playerAction === 'tow')
) {
    console.log("player win")
} else {
    console.log("computer win")

}

