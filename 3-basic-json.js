const express = require("express");
const path = require("path")
const app = express();
const {product} = require("./data.js")


app.use(express.static('./public'))
app.get("/", (req, res) => {
    console.log("request")
    res.json(product)
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000");
})