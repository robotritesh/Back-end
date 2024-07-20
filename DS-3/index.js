const express = require("express")
var morgan = require("morgan")
const fs = require("fs")
const validator = require("./middlwares/validatormiddelware")
const logger = require("./middlwares/loggarmiddleware")
const app = express()
app.use(express.json())
//app.use(logger)
//app.use(morgan('tiny'))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
// app.get("/list",(req,res)=>{
//     let data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
//     res.json({message:"here is the user",data:data})
// })

const validater = (req,res,next)=>{
    if(req.body.email.endsWith("@gmail.com")){
    next()
    }else{
        res.json({message:"email is not validated"})
    }
}

validator


app.post("/signup",(req,res)=>{
    console.log(req.body)
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    data.users.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.json({message:"signup sucessfull"})
    //res.send("hi")
})

app.get("/list",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    res.json({message:"here is the user",data:data})
})

app.listen(8282,()=>{
    console.log("Server Start")
})