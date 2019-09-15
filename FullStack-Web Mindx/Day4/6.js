// var fs = require('fs');
// var argv = process.argv.slice(2);
//     var fileInput= argv[0];
//     var content = fs.readFileSync(fileInput).toString();
//     console.log(content);
    // var arrayData = content.split("\r\n");
    // console.log(arrayData);
var fs = require('fs');
var argv = process.argv.slice(2);
var file1=argv[0];
var content = fs.readFileSync(file1).toString();
var x=content.split("");
for(var i in x){
    console.log(x[i]);
}
// console.log(content);

