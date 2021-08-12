const fs = require('fs')


//SYNC
const dataSync = fs.readFileSync('data/sync.txt', 'utf-8');
console.log(dataSync)


//ASYNC
const dataAsync= fs.readFile('data/async.txt', 'utf-8', (e, dataAsync) =>{
    if(e){
        throw e
    } else{
        console.log(dataAsync)
    }
})