$(".ttt").click(function(){
    $(".container").append(
        "<h1>ok</h1>"
    )
});
const express = require('express');
var app= express();
app.use('/k', express.static(__dirname + '/'));
