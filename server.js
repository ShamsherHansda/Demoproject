const express=require("express");
require('dotenv').config()
const app=express();
const Port = process.env.PORT|| 5000
app.get('/', (req , res)=>{
    res.send('<h1>Hello good morning</h1>');
});
app.get("/login", (req, res)=>{
    res.send("<h2> good</h2>")
})
app.listen(Port ,() =>{
    console.log('connenction seccessfull',Port);
});
