const { application } = require('express')
const express = require('express')
const path = require("path")

const app = express()
const port = 3000

//EMBEDDED JAVASCRIPT
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))

app.use('/public', express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {

  // res.render("index")

  res.render("index", {
    nama: "Aulia Rahman Zulfi", 
    title:"Home"
  })

})

app.get('/about', (req, res) => {

  res.render("about")
})

app.get('/mahasiswa', (req, res) =>{

  const mahasiswa = [
    {
      nama : "Aulia Rahman Zulfi",
      nim : "119140110",
      prodi : "Teknik Informatika"
    },
    {
      nama : "Fadhillah",
      nim : "119140217",
      prodi : "Teknik Informatika"
    },
    {
      nama : "Sayyid",
      nim : "119140190",
      prodi : "Teknik Informatika"
    }

  ]
  
  res.render("mahasiswa", {
    title:"List Mahasiswa", 
    mahasiswa
  })
  
})


app.get('/mahasiswa/:nim', (req, res) => {

  res.send(`Mahasiswa NIM : ${req.params.nim}`)

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