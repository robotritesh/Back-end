// const { createHmac } = require('node:crypto');

// const secret = 'abcdefg';
// const hash = createHmac('sha256', secret)
//                .update('I love cupcakes')
//                .digest('hex');
// console.log(hash);

// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e


// Asynchronous
const {
    randomBytes,
  } = require('node:crypto');
  
  randomBytes(25, (err, buf) => {
    if (err) throw err;
    console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
  });