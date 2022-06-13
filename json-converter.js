const fs = require('fs')

let rawArr = fs.readFileSync('./data.json')
let arr = JSON.parse(rawArr);
let convertedArr = arr.array


module.exports.convertedArr = convertedArr