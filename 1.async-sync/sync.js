//SYNCHRONOUS

const getUserSync = (menu) => {
    let nama = ''
    if (menu == 1){
        nama = "Nasi Goreng"   //MENU PERTAMA NASI GORENG
    }else{
        nama = "Rendang"     //MENU KEDUA RENDANG
    }
    return {menu, nama}
}

//PELANGGAN PERTAMA PESEN NASI GORENG
const pelangganSatu = getUserSync(1)
console.log(pelangganSatu)

//PELANGGAN KEDUA PESEN RENDANG
const pelangganDua = getUserSync(2)
console.log(pelangganDua)

//PELANGGAN KETIGA PESEN NASI GORENG
const pelangganTiga = getUserSync(2)
console.log(pelangganTiga)

//PELANGGAN LAIN MINTA PASS WIFI
const mintaPassWifi = "satusampaienam"
console.log(mintaPassWifi)