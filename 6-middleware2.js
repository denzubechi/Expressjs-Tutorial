const express = require("express")
app = express()
let {people} = require('./data.js')

//static assets
app.use(express.static("public"))

//parse from data
app.use(express.urlencoded({extended:false}))


app.post('/login', (req,res)=>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send("P;ease provide credentials")
})
//GET: Reading data
app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people})
})



app.listen(5000, ()=>{
    console.log("server is listemimg  to 5000")
})