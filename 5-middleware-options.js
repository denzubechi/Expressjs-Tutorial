const express = require("express");
const path = require("path")
const app = express();
const morgan = require("morgan")
const {products} = require("./data.js")
const logger = require("./logger.js")
const authorize = require("./authorize.js")


//req => middleware=> res
app.use([morgan("tiny"),logger])
//app.use([logger,authorize]) //invoking for any route
//Note middleware functions first before the get methosd

app.get("/", (req, res) => {
    
    res.send(`
    <h1>HomePage</h1>
    <p>Welcome to the homepage</p>
    <a href="/about">Aout</a>
    `)
})
app.get('/about',(req,res)=>{
    console.log(req.user)
    res.send("About pageSS")
})
//
app.listen(5000, ()=>{
    console.log("Server is listening on port 5000");
})