const express = require("express")
const connection = require("./config/db")
const glassRouter = require("./routes/glass.route")
const {PersonModel, PassportModel} = require("./models/personPassport.model")

const app = express()
const PORT = 3020;

app.use(express.json());
app.use("/glass", glassRouter)

app.get("/",(req,res)=>{
    res.send("server is running fine")
})

app.get("/create-person", async (req,res) => {
    try{
        const person = new PersonModel({
            name:"Ritesh Dhote",
            age:21,
            address: "181 Bisnoor Betul",
            email:"0173cs211@gmail.com"
        })
    
        await person.save()
    
        const Passport = new PassportModel({
            passportNumber:"1234567",
            country:"USA",
            userId: person._id
        })
    
        await Passport.save()

        res.send("person and its passport as well")
    }catch(error){
        res.send(error)
    }

});


app.listen(PORT, async ()=>{
    try{
        await connection
        console.log(`server is nuning on port ${PORT} and connected to the database` )
       
    }catch(error){
        console.log(`error connecting to the database or server ${error}`)
    }
})

