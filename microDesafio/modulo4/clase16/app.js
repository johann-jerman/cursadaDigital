const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res)=> {
    let indexPath =path.resolve('./views/index.html');
    res.sendFile(indexPath);
});

app.get('/babbage', function(req, res){
    let babbagePath = path.resolve(__dirname,'./views/babbage.html')
    res.sendFile(babbagePath)
})

app.get('/berners-lee', function(req, res){
    let bernersLeePath = path.join(__dirname,'./views/berners-lee.html')
    res.sendFile(bernersLeePath)
})

app.get('/clarke', function(req, res){
    let clarke = path.join(__dirname,'./views/clarke.html')
    res.sendFile(clarke)
})

app.get('/hamilton', function(req, res){
    let hamilton = path.join(__dirname,'./views/hamilton.html')
    res.sendFile(hamilton)
})

app.get('/hopper', function(req, res){
    let hopper = path.join(__dirname,'./views/hopper.html')
    res.sendFile(hopper)
})

app.get('/lovelace', function(req, res){
    let lovelace = path.join(__dirname,'./views/lovelace.html')
    res.sendFile(lovelace)
})

app.get('/turing', function(req, res){
    let turing = path.join(__dirname,'./views/turing.html')
    res.sendFile(turing)
})

// app.use(express.static('public'));
app.listen(3030);

