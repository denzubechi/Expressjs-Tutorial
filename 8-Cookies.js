//Cookies
//small data stored on the client side and sent to the client along server request

//Can be used for maintaionung session

const express = require("express")
const app = express()
const cookies = require("cookie-parser")

app.use(cookies())

let user = {
    name: "Samuel",
    Age: 19

}
app.get('/', (req,res)=>{
    res.send("Cookies-Parser")
})
app.get('/setuser',(req,res)=>{
    res.cookie("UserData", user)
    res.send("User Data Added")
})
//Getting the cookies Data
app.get('/getuser', (req,res)=>{
    res.send(req.cookies); //return a unique Id to identify the cookies
})
//Destroying Cookies
app.get('/logout', (req,res)=>{
    res.clearCookie('UserData');
    res.send("Logout Successfully")
})

const PORT = process.env.PORT||3000

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})