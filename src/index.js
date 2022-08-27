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

    app.use(express.json())
    
    let users = [
      {
        id: 2,
        username: 'Gibril jarju',
        phon: '7777510',
        password: 'uhfuieefheg'


      },

      {
        id: 3,
        username: 'musa ceesay',
        phon: '9974419',
        password: 'uhfuieefheg'

      }


    ]

    app.get('/',(req, res)=>{
        res.send('NAKANGA DEF')
    })

app.get('/api/users',(req, res)=>{
    res.json(users)
})

app.get('/api/users/:id', (req, res)=>{
      const id = req.params.id
      const user = users.find((user) => user.id === Number(id))
      
 if(user){
  res.json (user)
 }else{res.status(404).end()}
    })

  app.delete('/api/users/:id', (req, res)=> {
    const id = req.params.id
    users = users.filter((user) => user.id !== Number(id))
    res.status(204).end()
  })

   app.post('/api/users', (req, res) => {
    const content = req.body

    console.log(content);
    res.json(content)

   })

app.listen(port, () =>{
    console.log(`Example app listeening on port ${port}`)
})
