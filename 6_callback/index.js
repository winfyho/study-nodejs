interview(function(msg){
    console.log('smile',msg) 
})

function interview(callback){
    setTimeout(() => {
        callback('success')
    }, 500);
}