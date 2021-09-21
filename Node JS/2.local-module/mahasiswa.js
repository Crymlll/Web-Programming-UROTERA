function namaMahasiswa(nama){
    return `Perkenalkan, nama saya ${nama}`
}

const NIM = 119140110;

const biodata = {
    nama: 'Aulia Rahman Zulfi',
    nim: '119140110',
    prodi: 'Teknik Informatika',
    info(){
        return `Perkenalkan, nama saya ${this.nama}, nim ${this.nim} dari prodi ${this.prodi}`
    }
}

module.exports.namaMahasiswa = namaMahasiswa
module.exports.NIM = NIM
module.exports.biodata = biodata