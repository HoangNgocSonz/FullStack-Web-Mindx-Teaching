const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = ('./api/modules/book/book.router');
const mongoose = require('mongoose');
const config = require('./config');
mongoose.connect(config.mongoConnectionString);

const PORT = 3000;

const app = express();

//app.use(bodyParser);
app.use(bodyParser.json());
app.use("/api/book", bookRouter);

app.listen(PORT,function(){
    console.log(`Server is listening on${PORT}`);
});


//featherjs, sails.js,srapy

