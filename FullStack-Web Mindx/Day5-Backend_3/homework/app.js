  
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var app = express();
const port = process.env.PORT || 3000;


app.post('/user', bodyParser.json(), function (request, response) {
  var user4 = request.body;
  fs.readFile('./user.json', function (error, data) {
    if (error) response.end(error);
    else {
      var tempData = JSON.parse(data.toString());
      var len=getLength(tempData);
      tempData[`user${len + 1}`]=user4;  
      var stringData = JSON.stringify(tempData);
      var writerStream = fs.createWriteStream('user.json');
      writerStream.write(stringData);
      response.send(JSON.parse(stringData));
    }
  })
})

app.delete('/user',bodyParser.json(),function(require, response){
  var id=require.body;
  fs.readFile('./user.json',function(err,data){
    if(err) response.end(err);
    else{
      var tempData = JSON.parse(data.toString()); // type: json
      for(let i in tempData){
        if(tempData[i]['id']==id["id"]){
          delete tempData[i]; 
        }
      }
      stringData=JSON.stringify(tempData);
      var writerStream = fs.createWriteStream('user.json');
      writerStream.write(stringData);
      response.send(JSON.parse(stringData));
    }
  })
})

app.put('/user',bodyParser.json(),function(require, response){
  var id=require.body;
  fs.readFile('./user.json',function(err,data){
    if(err) response.end(err);
    else{
      var tempData = JSON.parse(data.toString()); // type: json
      for(let i in tempData){
        if(tempData[i]['id']==id["id"]){
          tempData[i]=id;
        }
      }
      stringData=JSON.stringify(tempData);
      var writerStream = fs.createWriteStream('user.json');
      writerStream.write(stringData);
      response.send(JSON.parse(stringData));
    }
  })
})

app.get('/user', function (request, response) {
  fs.readFile('./user.json', function (err, data) {
    if (err) response.end(err);

    else {
      response.write("you are supper")
      response.end(data);
    }
  })
})

var server = app.listen(port, function () {
  console.log(`Server run at localhost:${port}`);
})

function getLength(tempData){
  var len=0,i;
      for(i in tempData){
        len++;
      }
  return len;
}