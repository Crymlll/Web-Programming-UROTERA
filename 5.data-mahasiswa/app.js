const mahasiswa = require('./mahasiswa')
const chalk = require('chalk')
const validator = require('./validator')

const main = async () => {
    const nama = await mahasiswa.tanya(chalk.bold('Masukkan nama : '))
    const nim = await mahasiswa.tanya(chalk.bold('Masukkan nim : '))
    const prodi = await mahasiswa.tanya(chalk.bold('Masukkan prodi : '))

    const cekNIM = validator.validasiNIM(nim)

    if(cekNIM==true){
        mahasiswa.simpanData(nama, nim, prodi)
    }else{
        console.log("Terjadi Kesalahan input pada NIM")
    }

}


main()