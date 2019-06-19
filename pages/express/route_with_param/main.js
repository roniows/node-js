const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("index page")
})
app.get('/name',(req,res)=>{
    res.send("Roni");
})
// routes with param
app.get('/user/:param',(req,res)=>{
    res.send(req.params.param)
})
// optional routes with param
app.get('/users/:param?',(req,res)=>{
     if(req.params.param == undefined){
        res.send("all users")
     }else{
        res.send(req.params)
        //res.send("all users")
     }
})

// from to params
app.get('/tour/:from-:to',(req,res)=>{
    res.send(`tour from ${req.params.from} to ${req.params.to}`)
    console.log(req.params)
})
// or use dot
app.get('/tour/:from.:to',(req,res)=>{
    res.send(`tour from ${req.params.from} to ${req.params.to}`)
    console.log(req.params)
})
app.listen('3000',()=>console.log('server running'))