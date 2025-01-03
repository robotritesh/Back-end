// const [add,sub,mul,div] = require("./index")
// console.log(add(21,23))
// console.log(sub(68,23))
// console.log(mul(21,2))
// console.log(div(46,23))

const crypto = require("crypto")
const {createHash} = require("crypto")  //importing the inbuild module

const password = "ritesh@123"     // password hassing: 4ca389d825f236e8c432ad1f76feb97f54bae10fdbb5b44fb4e6bd5d2a398efe

// const hashedPassword = crypto.createHash("sha256").update(password).digest('hex');
const hashedPassword = createHash("sha256").update(password).digest('hex');

console.log(hashedPassword );

