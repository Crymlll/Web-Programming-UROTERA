//ASYNCHRONOUS

const getUser = (menu, callback) => {
    let time = ''
    if(menu === 1){
        time = 4000     //SET WAKTU 4000 MS ATAU 4 DETIK
    }else{
        time = 7000     //SET WAKTU 7000 MS ATAU 7 DETIK
    }
    setTimeout(() => {
        let nama = ''
        if(menu === 1){
            nama = "Nasi Goreng"    //MENU PERTAMA NASI GORENG
        }else{
            nama = "Rendang"    //MENU KEDUA RENDANG
        }
        callback({menu, nama})
    }, time)
}


//PELANGGAN PERTAMA PESEN NASI GORENG
const pelangganSatu = getUser(1, (hasil) => {
    console.log(hasil, 'Pelanggan 1')
})

//PELANGGAN KEDUA PESEN RENDANG
const pelangganDua = getUser(2, (hasil) => {
    console.log(hasil, 'Pelanggan 2')
})

//PELANGGAN KETIGA PESEN NASI GORENG
const pelangganTiga = getUser(1, (hasil) => {
    console.log(hasil, 'Pelanggan 3')
})

//PELANGGAN LAIN MINTA PASS WIFI
const mintaPassWifi = "satusampaienam"
console.log(mintaPassWifi)