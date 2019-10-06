// module.exports = app;
// $(".ttt").click(function(){
//     $(".container").append(
//         "<h1>ok</h1>"
//     )
// });
const express = require('express');
var app= express();
const port=3000;

app.use('/k', express.static(__dirname + '/'));
// $(".ttt").click(function(){
//     app.use('/k', express.static(__dirname + '/'));
// });

app.get('/api/helloo',function(request, response){
    
    response.end("hello world");
})





const server=app.listen(port, function(){
    console.log('Server run in localhost:3000');
})