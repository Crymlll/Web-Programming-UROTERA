const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const lokasiFolder = './data';
if(!fs.existsSync(lokasiFolder)){
    fs.mkdirSync(lokasiFolder);
}

const lokasiFile = './data/mahasiswa.json';
if(!fs.existsSync(lokasiFile)){
    fs.writeFileSync(lokasiFile, '[]', 'utf-8');
}


const tanya = (tulisan) => {
    return new Promise((resolve, reject) => {
        rl.question(tulisan, (pertanyaan) => {
            resolve(pertanyaan)
        })
    })
}

const simpanData = (nama, nim, prodi) => {
    const data = {nama, nim, prodi};
    const file = fs.readFileSync('data/mahasiswa.json','utf8');
    
    const mahasiswa = JSON.parse(file);
    mahasiswa.push(data);

    fs.writeFileSync('data/mahasiswa.json', JSON.stringify(mahasiswa));


    console.log('Data Berhasil Ditambah!');
    rl.close();
}

module.exports = {tanya, simpanData}