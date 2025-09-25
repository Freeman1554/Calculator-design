const colors = require('colors')
const calculate = require('./calculator') 
const path = require('path')

let basename = path.basename(__filename)

console.log("Reg Number:(BD/2025/TC3/089)")
console.log(colors.green(calculate.Add()))
console.log(colors.blue(calculate.subtract()))
console.log(colors.bgMagenta(calculate.multiply()))
console.log(colors.bgYellow(calculate.divide()))
console.log(colors.red(basename))