const validator = require('validator')


function validasiNIM(nim){
    return validator.isInt(nim)
} 


module.exports = {validasiNIM}