const express = require("express")

const userRouter = express.Router();

userRouter.post("/register",(req, res)=>{
    try{
        res.status(201).json({
            massage: "User registered successfully"
        })
    }catch(error){
        res.status(500).json({
            massage: "Error occured during creation of user"
        })
    }
})

userRouter.post("/login",(req, res)=>{
    try{
        res.status(200).json({
            massage: "User loggrd in successfully"
        })
    }catch(error){
        res.status(500).json({
            massage: "Error occured during login"
        })
    }
})

module.exports = userRouter;