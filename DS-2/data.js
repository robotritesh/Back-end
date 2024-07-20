const http = require("http")
const fs = require("fs")

    const server = http.createServer((req,res)=>{
        
        if(req.url=="/"){
            let data = fs.readdirSync("./","utf-8")
            console.log(data)
            res.writeHead(200,{
                'Content-Type':'text/html'
            })
            data.forEach((el,i)=>{
                res.write(`<a href=${el}> <li>${el}</li></a>`)
            })
            res.end()

        }else if(req.url != "/favicon.ico"){
            let path = fs.existsSync(`.${req.url}`)
            console.log("path", path)
            
            if(path){
                let check = fs.statSync(`.${req.url}`).isDirectory()
            //console.log("this is from else", req.url,check)
            if(check==false){
                let data = fs.readFileSync(`.${req.url}`,"utf-8")
                res.end(data)
            }else if(check==true){
                let data = fs.readdirSync(`.${req.url}`,"utf-8")
            res.writeHead(200,{
                'Content-Type':'text/html'
            })
            data.forEach((el,i)=>{
                    res.write(`<a href= ${req.url} /${el}><li> ${el}</li></a>`)
                
                
            })
            res.end()
            }

            }else{
                res.end("Not a velid path")
            }
            
            
        }
    })

    server.listen(8587,()=>{
        console.log("server statet")
    })
