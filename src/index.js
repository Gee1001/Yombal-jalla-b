const express = require('express')
const app = express()
const port = 3001

const me ={
    fmane : "Gibril",
    minit : "M",
    lname : "Jarju",
    status : "online",
    location : "kololi",
    living : "true",
    phone : "7777510",
    gender : "male"
    

    }

    app.get('/',(req, res)=>{
        res.send('NAKANGA DEF')
    })

app.get('/me',(req, res)=>{
    res.json(me)
})

app.listen(port, () =>{
    console.log(`Example app listeening on port ${port}`)
})
