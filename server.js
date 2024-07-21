const express = require('express');
const app = express();
const bodyParser= require('body-parser');


app.get("/",(req,res)=>{
    res.send("hello wolld")
})

app.use(bodyParser.json());
app.listen('3000',(res,req)=>{
    console.log("sever is running ")
})

app.post("/view/car",(req,res)=>{
    const {name, brand} =req.body;
    console.log( "car name",name)
    console.log("brand name", brand);
    res.send("car is successfully listed")

});
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Sandeepku821110:AdU33Tt6DYhBa69x@cluster95.0qznq3u.mongodb.net/sandeepcars',{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("data base is c")
}).catch((error)=>{
    console.log("data bse is not c")
})
