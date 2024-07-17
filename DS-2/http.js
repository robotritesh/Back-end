const fs = require("fs")
const http = require("http")


let data = fs.readFileSync("./data.txt","utf-8")
console.log(data)

const server = http.createServer((req,res)=>{
     if(req.url == "/home"){
        res.end("welcome to home")
     }else if(req.url == "/readtext"){
      let data = fs.readFileSync("./data.txt","utf-8")
      res.end(data)
     }
     else{
        res.end("welcome to other page")
     }
})


server.listen(8080,()=>{
    console.log("server started")
})