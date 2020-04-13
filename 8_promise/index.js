(function(){
    var promise = new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("success")
        }, 500);

        // resolved状态无法跳转到rejected状态，所以无法被执行
        // reject(new Error('fail'))
    })
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })
    
    setTimeout(() => {
        console.log(promise)
    }, 800);
    
}())

(function(){
    var promise = new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("success")
        }, 500);
    })

    var promise1 = promise.then((res) => {
        throw new Error()
    })
    
    setTimeout(() => {
        console.log(promise)  // Promise <resolved>
        console.log(promise1) // Promise <rejected>
    }, 800);
    
}())

(function(){
    function interview(round){
        return new Promise(function(resolve,reject){
            
            setTimeout(() => {
                if(Math.random() > 0.3){
                    resolve("success")
                }else{
                    reject(round)
                }
            }, 500);
        })
    }
    interview(1)
        .then(()=>{
            return interview(2)
        }) 
        .then(()=>{
            return interview(3)
        }) 
        .then(()=>{
            console.log("面试成功！！！")
        }) 
        .catch((round)=>{
            console.log(`fail at ${round} round`)
        })
}())