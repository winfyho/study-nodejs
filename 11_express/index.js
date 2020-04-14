const express = require('express')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const app = express()

app.get('/favicon.ico',function(req,res){
    // res.writeHead(200)
    // res.end()
    res.status(200).end()
    return
})

app.get('/',function(req,res){
    console.log('http://localhost:3000/')
    // res.writeHead(200)
    // fs.createReadStream(__dirname+'/index.html').pipe(res)
    // res.status(200)
    res.status(200).send(fs.readFileSync(__dirname + '/index.html','utf-8'))
    return
})

app.get('/game',function(req,res){

    const parseUrl = url.parse(req.url)
    const query = req.query
    console.log(query)

    
    
    res.writeHead(200)
    res.end(JSON.stringify(query.type))
})

app.listen(3000)
// console.log(express)
