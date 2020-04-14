// console.log(async function(){
//     return 1
// }())
// console.log(function(){
//     return new Promise((resolve,reject)=>{
//         resolve(1)
//     })
// }())
// 输出结果相同
// Promise { 1 }
// Promise { 1 }

// (function () {
//     async function asyncFunc() {
//         var content = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(6)
//             }, 500);
//         })
//         console.log('content', content)
//         return 4
//     }
//     var result = asyncFunc()
//     setTimeout(() => {
//         console.log(result)
//     }, 800);
// }())

// (function () {
//     async function asyncFunc() {
//         try {
//             var content = await new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     reject(new Error('4'))
//                 }, 500);
//             })
//         } catch (e) {
//             console.log(e)
//         }
//         console.log('content', content)
//         return 4
//     }
//     var result = asyncFunc()
//     setTimeout(() => {
//         console.log(result)
//     }, 800);
// }())

(async function () {

    try {
        await interview(1)
        await interview(2)
        await interview(3)

    } catch (e) {
        return console.log('fail',e)
    }
    console.log('success')

})()
function interview(round) {
    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("success")
            } else {
                reject(round)
            }
        }, 500);
    })
}