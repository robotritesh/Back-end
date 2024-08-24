const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    gender:String
})

const userModel = mongoose.model("user",userSchema)

app.post("/user",async (req,res)=>{
    try{
        await userModel.insertMany([req.body])
    }catch(error){
        res.send("Some thing went wrong")
    }
    
})

app.get("/user",async (req,res)=>{
    let data = await userModel.find()
    res.json({"massage":"Here is the list of the users",data})
})

// app.get("/user/:id",async (req,res)=>{
//     let data = await userModel.findOne({_id:req.params.id})
//     res.json({"massage":"Here is the user ",data})
// })

app.put("/user/:id",async (req,res)=>{
    await userModel.findByIdAndUpdate({_id:req.params.id},req.body)
    res.json({"massage":"Data updated",data})
})

app.delete("/user/:id",async (req,res)=>{
    let data = await userModel.findByIdAndDelete({_id:req.params.id})
    res.json({"massage":"Data Delete"})
})

app.listen(8080,()=>{
    connectToDB()
    console.log("Server started")
})

async function connectToDB(){
    await mongoose.connect("mongodb://localhost:27017/mongoosedata")
    console.log("connect to DB")
}