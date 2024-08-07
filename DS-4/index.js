const express = require("express")

//const fs = require("fs") --not show photo & file use it only show cloudinary

const cloudinary = require("cloudinary")
const multer  = require('multer')
require('dotenv').config()

const userRoutes = require("./Routes/userRoutes")
const todoRoutes = require("./Routes/todoRoutes")

const loggerMiddleware = require("./middlewares/logger.middleware")

const app = express()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
app.use(express.json())

app.get("/files",(req,res)=>{
    console.log(req.boby)
})

app.post('/profile', upload.single('avatar'),async function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    //console.log(req.file)

    cloudinary.config({ 
        cloud_name: 'dayhgdxot',
        api_key: '427452141654331',
        api_secret: process.env.api_secret
    });

    const uploadResult = await cloudinary.uploader
       .upload(
           req.file.path, {
               public_id: 'photo'
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    //fs.unlinkSync(req.file.path)   ----it is use not show photo & file in vsCode it will show cloudinary 
    res.send("seccess...!")
  })

app.use(loggerMiddleware)
app.use("/users",userRoutes)
app.use("/todos",todoRoutes)

app.listen(8080,()=>{
    console.log("server is started");
})