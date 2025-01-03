// const even = require("is-even");

// console.log(even(11));

const fs = require("fs")

// fs.writeFileSync("./index.tex","This is first file that i am creating")

// console.log("File created successfully")



// try{
//     const data = fs.readFileSync("./index.tex","utf-8")
//     console.log(data)
// }catch(error){
//     console.log(error)
// }


fs.readFile("./index.tex", "utf-8",(err,data)=>{
    if(err){
        console.log(err) 
    }
    console.log(data) 
})


