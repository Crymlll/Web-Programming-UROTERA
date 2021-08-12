const fs = require('fs');


//SYNC
try{
    fs.writeFileSync('data/sync.txt', "Diolah Secara Synchronous")
}catch(e){
    console.log(e)
}

//ASYNC
fs.writeFile('data/async.txt',"Diolah Secara Asyncronous", (e) => {
    console.log(e)
})