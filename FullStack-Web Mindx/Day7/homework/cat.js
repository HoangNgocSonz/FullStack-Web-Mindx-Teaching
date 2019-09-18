const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var app = express();
const port = process.env.PORT || 3000;

const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost:27017/web28');

var catModel = mongoose.model('Cat',{
    name : String,
    age: Number
});


app.get('/user', function (request, response) {
    catModel.find().exec(function(err,data){
        if(err) console.log(err);
        else{
            response.end(data.toString());
        }
    })
})

app.post('/user', bodyParser.json(), function (request, response) {
    var user4 = request.body;
    var newKitty = new catModel(user4);
    newKitty.save(function(err,data){
        if(err) console.log(err);
        else{
            response.end("success");
        }
    })
})

app.delete('/user',bodyParser.json(),function(require, response){
    var name=require.body["name"];
    catModel.deleteMany({name:name}).exec(function(err,data){
        if(err) console.log(err);
        else{
            response.end("success");
        }
    })
  })

 app.put('/user',bodyParser.json(),function(require, response){
    var name=require.body["name"];
    var age = require.body["age"];
    catModel.updateOne({},{$set:{"age":age,"name":name}}).exec(function(err,data){
        if(err) console.log(err);
        else{
            response.end("success");
        }
    })
})

var server = app.listen(port, function () {
  console.log(`Server run at localhost:${port}`);
})


