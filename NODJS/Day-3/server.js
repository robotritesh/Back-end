const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("This is about the Home Page")
    }else if(req.url === "/about"){
        res.setHeader("Content-Type","text/html");
        res.end("<h1>This is the about section</h1>")
    }else if(req.url === "/data"){
        let data = fs.readFileSync("./data.json", "utf-8")
        res.end(data)
    }
    else{
        res.end("404: Not Fund")
    }

})


server.listen(3880,()=>{
    console.log("server is runing Succesfully http://localhost:3880")
})