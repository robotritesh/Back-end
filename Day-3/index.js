const express = require("express")
const fs = require("fs")

const PORT = 3003
const server = express();
server.use(express.json())

// const middleware1=(req,res,next)=>{
//    console.log(1)
//    next()
//    console.log(2)
// }

// const middleware2=(req,res,next)=>{
//     console.log(3)
//     next()
//     console.log(4)
//  }

//  server.use(middleware1, middleware2)

// const logger = (req,res,next)=>{
//     console.log(req.method,req.url)
//     const content = `\n the method is ${req.method} and the api end-point is ${req.url} and 
//                      the time is ${Date()} `
//     fs.appendFileSync("./requestlogs.txt",content)
//     next()
// }

// server.use(logger)

const timeLogger = (req,res,next)=>{
    const reqTime = new Date().getTime();
    next()
    const resTime = new Date().getTime();
    console.log(`the request took ${resTime - reqTime}ms`)
}

server.use(timeLogger)

server.post('/school',(req,res)=>{
    res.send('Welcome to School')
})

server.get('/home',(req,res)=>{
    res.send('Welcome to home')
})

server.get('/about',(req,res)=>{
    res.send('Welcome to about')
})



server.listen(PORT,()=>{
    console.log(`server is start ${PORT}`)
})