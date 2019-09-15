const express = require('express');
const fs = require('fs');
var app = express();
var port=3000;
app.get('/user',function(require, response){
    fs.readFile('./user.json',function(err,data){
        if(err) response.end(err);
        else response.end(data);
    })
})
const server = app.listen(port, function(){
    console.log(`server run at localhost ${port}`);
})