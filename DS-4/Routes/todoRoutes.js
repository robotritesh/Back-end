const express = require("express")

const todoRoutes = express.Router()

todoRoutes.get("/todo",(req,res)=>{
    res.send("This are todes")
})

todoRoutes.post("/addtodo",(req,res)=>{
    res.send("Todo added")
})

todoRoutes.put("/todo/:id",(req,res)=>{
    res.send("Todo updated")
})

todoRoutes.delete("/todo/:id",(req,res)=>{
    res.send("Todo delete")
})

module.exports=todoRoutes