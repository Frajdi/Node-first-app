const arr = require('./json-converter.js')
const app_arr = require('./app-array')
const lodash = require('lodash')

our_arr = arr.convertedArr

const concatedArr = lodash.concat(app_arr.app_arr, our_arr)

module.exports.concatedArr = concatedArr