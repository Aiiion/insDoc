const express = require('express');

const app = express()
 const port = 3000

app.post('/', function (req, res){
    res.send('hello world!' + req )
})

app.put('/', function (req, res){
    res.send('PUTTY');
})

app.delete('/', function (req, res){
    res.send('deleted');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

