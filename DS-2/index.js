const express = require('express')
const app = express()
const fs = require("fs")


app.get("/home",(req,res)=>{
    res.send("<h1>welcome home page</h1>")
})

app.post("/signup",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    //console.log(data)
    let reqdata = {id:87, name:"shailesh",grnder:"Male"}

    let flag = false;
    data.users.forEach((el,i)=>{
        if(el.name == reqdata.name){
            flag = true

        }
    })

    if(flag == false){
        data.users.push(reqdata)
        console.log("data atared push", data)
        fs.writeFileSync("./db.json", JSON.stringify(data))
        
    }
    
    if(flag){
        res.send("User already register please login")
    }else{
        res.send("Signup Sucessfull")
    }
})

app.listen(8181,()=>{
    console.log("server ststed 8181")
})