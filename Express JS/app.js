const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
  // res.send('Hello World!')

  res.sendFile("./index.html", {root: __dirname})

  // res.sendFile("./index.pdf", {root: __dirname})
  // res.sendFile("./package.json", {root: __dirname})
})

app.get('/about', (req, res) => {
  //res.send('Ini adalah halaman about!')

  res.sendFile("./about.html", {root: __dirname})
})

app.get('/mahasiswa/:idMhs', (req, res) => {
  // res.send('Ini adalah halaman mahasiswa!')

  // res.json({
  //   nama:"Aulia Rahman Zulfi",
  //   nim: "119140110",
  //   prodi: "Teknik Informatika"
  // })

  // res.sendFile("./mahasiswa.html", {root: __dirname})

  res.send(`Mahasiswa ID : ${req.params.idMhs}`)
})

app.use('/', (req, res) =>{
  res.status("404")
  res.send("<h1>404</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// REQUEST = APA YANG DIKIRIMKAN KE EXPRESS
// RESPONSE = APA DIKEMBALIKAN DARI EXPRESS