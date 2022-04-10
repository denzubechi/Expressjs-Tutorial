//Session

const express = require("express")
const app = express()
const session = require("express-session")


//Using the session module as a middleware
app.use(session({
    secret: "Your Secret Key", //holding the secret key for the session
    resave: true, 
    saveUninitialized: true
}
))
//creating routes
app.get('/', (req,res)=>{
 req.session.name ="john"
 return res.send("Session Started")
})
app.get('/session', (req,res)=>{
    var name = req.session.name
    console.log(req.session)
    res.send(name)
})
app.get('/destroy', (req,res)=>{
    req.session.destroy(function(error){
        console.log("Session Destroyed")
    })
    res.end()
})


const PORT = process.env.PORT||3000

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})