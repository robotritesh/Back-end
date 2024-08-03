const validationMiddleware = (req,res,next)=>{
    let email = req.body.email;
    const alphaS = "ab..z"
    const alphaB = "AB..Z"
    const num = "123..90"
    const spCh = "!@#$$%^&&*()_+"
    if(email.endsWith("@gmail.com")){
        next()
    }else{
        res.send("Invalid email")
    }
}

module.exports=validationMiddleware