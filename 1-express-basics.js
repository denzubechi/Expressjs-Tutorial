const express = require("express")
const app = express()

app.get("/",(req, res)=>{
    console.log("User hits the resource")
    res.status(200).send("Home Page")//response
})
app.get("/about",(req, res)=>{
    console.log("User hits the resource")
    res.status(200).send("About Page")//response
})
app.all("*",(req, res)=>{
    console.log("User hits the resource")
    res.status(404).send("<h1>Page not found</h1>")//response
})



app.listen(5000, ()=>{
    console.log("Server is listening on port 5000")
})
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.listen
//app.use