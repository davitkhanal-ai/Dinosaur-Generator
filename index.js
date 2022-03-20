const express = require('express')
const app = express()
const port = 3000;

//serving files

app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(`listening in to port ${port}`)
})

