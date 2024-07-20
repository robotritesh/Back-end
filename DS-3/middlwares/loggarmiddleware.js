const fs = require("fs")

const logger = (req,res,next)=>{
    let log = `method: ${req.method} url:${req.url}`
    fs.appendFileSync("./log.txt", log+"\n")
    next()
}

module.exports = logger