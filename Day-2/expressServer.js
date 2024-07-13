const express = require("express");
const fs = require("fs");

const server = express();
const PORT = 3002;

server.use(express.json())

server.get("/home",(req,res)=>{
    res.send("welcome to homepage")
})

server.get("/user-data",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8")
    res.send(data)
})

server.post("/add-data",(req,res)=>{
    let incomingData = req.body
    console.log("incoming",incomingData)
    const userData = fs.readFileSync("./db.json","utf-8")
    console.log("userData",userData)
    const parsedData = JSON.parse(userData)
    console.log("parsedData", parsedData)
    parsedData.data.push(incomingData)
    console.log("old+newdata", parsedData)
    fs.writeFileSync("./db.json",JSON.stringify(parsedData))
    res.send(`data recieved successfully ${parsedData}`)
})

server.listen(3002,()=>{
    console.log(`server is runing on port ${PORT}`)
})