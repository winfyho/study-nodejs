const eventloop = {
    queue:[],
    loop(){
        while(this.queue.length){
            var callback = this.queue.shift()
            callback()
        }
        setTimeout(this.loop.bind(this), 50);
    },
    add(callback){
        this.queue.push(callback)
    }
}

// 开启事件循环，检查队列是否有待执行回调函数
eventloop.loop()


// setTimeout可以模拟阻塞I/O，如文件读取等
// 阻塞事件完成后，向队列发送callback消息
setTimeout(() => {
   eventloop.add(function(){
       console.log('1')
   }) 
}, 500);
setTimeout(() => {
    eventloop.add(function(){
        console.log('2')
    }) 
 }, 1000);