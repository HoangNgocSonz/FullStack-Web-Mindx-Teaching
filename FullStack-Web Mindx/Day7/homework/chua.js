const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var app = express();
const port = process.env.PORT || 3000;


const CatSchema = mongoose.Schema({
    name:String,
    age:Number
});
const CatModel = mongoose.model('Cat',CatSchema);


app.post('/user', bodyParser.json(), function (request, response) {

})

app.get('/user', function (request, response) {

})

var server = app.listen(port, function () {
  console.log(`Server run at localhost:${port}`);
})