const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.question("Masukkan Nama : ", (nama) => {
    rl.question('Masukkan NIM: ',(nim)=>{
        rl.question('Masukkan Prodi : ', (prodi) => {
            const daftar = {nama, nim, prodi}

            const fileMentah = fs.readFileSync('data/daftarMahasiswa.json','utf8')  //ISI FILE DIAMBIL MENGGUNAKAN READ SYNC
            const isiFile = JSON.parse(fileMentah)  //FILE MENTAH TERSEBUT DI CONVERT KE BENTUK JSON AGAR DAPAT DI PUSH (DALAM BENTUK ARRAY)
            isiFile.push(daftar)    //ISI FILE DI PUSH DARI DAFTAR YAITU NAMA, NIM DAN PRODI

            fs.writeFileSync('data/daftarMahasiswa.json', JSON.stringify(isiFile))  //FILE DITULISKAN KEMBALI DAN DIUBAH LAGI KEDALAM BENTUK STRING

            console.log('Data Berhasil Ditambah!')
            rl.close()
        })
    })
    
})