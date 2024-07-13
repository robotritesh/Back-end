console.log(process.argv)

let operation = process.argv[2]
let a = process.argv[3]
let b = process.argv[4]
if(operation == "sum"){
    sum(Number(a),Number(b))
}
function sum(a,b){
    console.log(a+b)
}