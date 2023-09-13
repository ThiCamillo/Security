
//npm install crypto
const crypto = require('crypto');
const message="With node.js we can create hash with several algoritms";
//SHA: Secure Hash Algoritm
//MD: Message Digest
result = crypto.createHash("md5").update(message).digest();
console.log("MD5", result ,result.length,"bytes",result.length*8 ,"bits", result.toString('hex') ,
result.toString('hex').length);