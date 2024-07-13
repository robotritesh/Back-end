const sum = require("./sum")
const fs = require("fs")
const os = require("os")

// fs.readFile("./text.tx", "utf-8", (err, data)=>{
// if(err){
//     console.log(err)
// }else{
//     console.log(data)
// }
// })

// console.log("Hi")



// console.log(os.cpus())
// console.log(os.totalmem())

fs.writeFile("./dummy.txt", "data of this file ", (err)=>{
    if(err){
        console.log(err)
    }
    console.log("file created")
})