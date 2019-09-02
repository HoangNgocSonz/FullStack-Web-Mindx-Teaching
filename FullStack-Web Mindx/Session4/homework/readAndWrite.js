var fs = require("fs");
var argv = process.argv.slice(2);
var fileInput = argv[0];
var data =fs.readFileSync(fileInput).toString();
var dataArray=data.split("\r\n");

var temporary = new Array();
var key = new Array();
var value = new Array();
function toNumber(strNumber) {  
    return +strNumber;
}

for(var i=0;i<dataArray.length;i++){
    temporary=dataArray[i].split(" ");
    key[i]=temporary[0];
    value[i]=temporary[1];
    value[i]=toNumber(value[i]);
}

var writerStream = fs.createWriteStream('output.txt');
for(var i=0;i<key.length;i++){
    for(var j=i+1;j<key.length;j++){
        if(key[i]===key[j]){
            value[i]=value[i]+value[j];
            key.splice(j,1);
            value.splice(j,1);
        }
    }
    value[i]=String(value[i]);
    writerStream.write(key[i] + " " + value[i] + "\n",'UTF8');
}
