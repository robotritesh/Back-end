const express = require("express")
const validationMiddleware = require("../middlewares/validation.middleware")


const userRoutes = express.Router()

userRoutes.use(validationMiddleware)
userRoutes.post("/signup",(req,res)=>{
    res.send("signup sucess")
})

userRoutes.post("/login",(req,res)=>{
    res.send("login sucess")
})

module.exports=userRoutes