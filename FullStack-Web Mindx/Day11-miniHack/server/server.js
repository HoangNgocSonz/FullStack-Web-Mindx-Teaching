const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./api/modules/user/user.router');
var app= express();
const port=3000;

app.use(express.static('../hello'));

app.get('/api/helloo',function(request, response){
    response.end("hello world");
})

const server=app.listen(port, function(){
    console.log('Server run in localhost:3000');
})