const express = require("express");
const path = require("path")
const app = express();
const {products} = require("./data.js")



app.get("/", (req, res) => {
    console.log("request succesful")
    res.send(`
    <h1>HomePage</h1>
    <p>Welcome to the homepage</p>
    <a href="/api/products">Products</a>
    `)
})

app.get("/api/products",(req,res)=>{
    const newProduct = products.map((product)=>{
    const {id,name,image} = product;
    return {id,name,image }
    })
    res.json(newProduct)
})
app.get("/api/products/:ProductID", (req,res)=>{
    const {ProductID} = req.params;
  //  console.log(req);
    //console.log(req.params);
    const singleProduct = products.find((product) => product.id === Number(ProductID))
    if(!singleProduct){
      return  res.status(404).send("Product Does not exist")
    }
    return res.json(singleProduct)
})
app.get("/api/products/:ProductID/reviews/:reviewID", (req,res)=>{
    console.log(req.params);
    res.send("Hello World");
})
app.get("/api/v1/query", (req,res)=>{
    const { search, limit } = req.query
    let sortedProducts = [...products];

    if( search ) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
        //res.status(200).send("No Products matched your search");
       return res.status(200).json({sucess:true, data : []});
    }
    res.status(200).json(sortedProducts)
    //res.send("Hello world");'
   
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000");
})