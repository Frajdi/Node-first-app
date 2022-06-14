const concatedArr = require('./concat')

const our_arr = concatedArr.concatedArr

let sum = 0;

our_arr.forEach(element => sum += element)

module.exports.sum = sum
