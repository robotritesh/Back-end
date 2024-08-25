const express = require("express")
const GlassModel = require("../models/glass.model");
const { model } = require("mongoose");

const glassRouter = express.Router()

glassRouter.post("/create-glass", async (req,res)=>{
    const {color, material, size, brand} = req.body;
    try{
        const glass = new GlassModel({
            color,
            material,
            size,
            brand
        })
        await glass.save()
        res.status(201).send("glass created successfully")
    }catch(error){
        res.status(404).send("error creating glass")
    }
})

glassRouter.get("/get-glasses",async(req,res)=>{
    try{
        const glasses = await GlassModel.find()
        res.status(200).json({"msg":"glasses fetched succesfully",glasses})
    }catch(error){
        res.status(404).send(`error fetching glasses ${error}`)
    }
})

glassRouter.patch("/update-glass/:id",async (req,res)=>{
    const {id} = req.params;
    try{
       const updatedGlass = await GlassModel.findByIdAndUpdate({_id:id},req.body)
       res.status(200).json({"msg":"Updated Successfully",updatedGlass})
    }catch(error){
        res.status(404).send(`error updating glasses ${error}`)
    }
})

glassRouter.delete("/delete-glass/:id",async (req,res)=>{
    const {id} = req.params;
    try{
       const updatedGlass = await GlassModel.findByIdAndDelete({_id:id})
       res.status(200).json({"msg":"delete Successfully",updatedGlass})
    }catch(error){
        res.status(404).send(`error deleting glasses ${error}`)
    }
})


module.exports = glassRouter