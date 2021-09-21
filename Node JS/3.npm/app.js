const validator = require('validator')
const chalk = require('chalk')

// console.log(validator.isEmail('aulia@gmail.com'))
// console.log(validator.isMobilePhone('081234567891', ['ja-JP', 'id-ID']))
// console.log(validator.isNumeric('4324342dsa4'))
// console.log(validator.isAscii('ม่'))

// var x = 's'
// console.log(validator.isEmpty(x))

// console.log(validator.isPostalCode('13535', 'ID'))
// console.log(validator.isStrongPassword('Urotera123@@@', {minLength:3}))
// console.log(validator.isURL('https://com/package/validator'))
// console.log(validator.isFloat('32'))
// console.log(validator.isHexColor('#32a822'))


// console.log(chalk.italic.rgb(109, 237, 229)(`check check`))
// console.log(chalk.italic.hex('#6d73ed')(`Cuma Ngetes Doang`))


console.log(chalk.bold('CPU'), chalk.yellow.bgWhite('47%'))
console.log(chalk.bold('RAM'), chalk.red.strikethrough('92%'))
console.log(chalk.bold('DISC'), chalk.green('3%'))
