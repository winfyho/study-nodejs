const EventEmitter = require('events')
class Geektime extends EventEmitter{
    constructor(){
        super()
        setInterval(() => {
            this.emit('newLesson',{price:Math.random()*100})
        }, 3000);
    }
}

const geektime = new Geektime()
geektime.addListener('newLesson',(res)=>{
    console.log('year',res)
})