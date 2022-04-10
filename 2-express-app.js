const express = require("express");
const path = require("path")
const app = express();



app.get("/", (req, res) => {
    console.log("user hits the server");
    res.sendFile(path.resolve(__dirname,'./index.html'))
})
//setup static and middleware
app.use(express.static('./public'))

app.all("*", (req, res)=>{
    res.status(404).send("<h1>Request not found</h1>")
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000");
})