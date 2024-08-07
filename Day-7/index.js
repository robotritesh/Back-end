const express = require("express")
const connection = require("./config/db")
const glassRouter = require("./routes/glass.route")

const app = express()
const PORT = 3020;

app.use(express.json());
app.use("/glass", glassRouter)

app.get("/",(req,res)=>{
    res.send("server is running fine")
})


app.listen(PORT, async ()=>{
    try{
        await connection
        console.log(`server is nuning on port ${PORT} and connected to the database` )
       
    }catch(error){
        console.log(`error connecting to the database or server ${error}`)
    }
})

