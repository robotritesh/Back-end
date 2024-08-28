const express = require("express")
const dotenv = require("dotenv").config()
const connection = require("./config/db")
const userRouter = require("./routes/user.route");

const app = express()
const PORT = process.env.PORT || 3000

app.get("/",(req, res)=>{
    res.send("Hello world")
})

app.listen(PORT,async ()=>{
    try{
        await connection
        console.log(`Server is running on http://localhost:${PORT} db is also connected`)
    }catch(error){
        console.log("Error connecting",error)
    }
})