const fs = require("fs")

let data = fs.readFileSync("./data.txt","utf-8")

// console.log(data)

// console.log("hello")

fs.writeFile("text.txt","Hello wordl",(err)=>{
    if(err){
        console.log("err",err)
    }else{
        console.log("sucessfull")
    }
})

fs.appendFile("text.txt",'\n'+"Hello wordl",(err)=>{
    if(err){
        console.log("err",err)
    }else{
        console.log("sucessfull")
    }
})