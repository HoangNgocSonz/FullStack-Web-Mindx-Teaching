// const express = require('express');
// const app = express();
// const port =3000;

// app.get('/hello',function(request,response){
//     response.end("hello world");
// })

// app.get('/hell',function(request,response){
//     response.end("son Hoang");
// })

// const server = app.listen(port, function(){
//     console.log(`server run at localhost ${port}`);
// })
const express = require('express');
var app= express();
const port=3000;

app.get('/hello',function(request, response){
    response.end("hello world");
})
const server=app.listen(port, function(){
    console.log('Server run in localhost:3000');
})
