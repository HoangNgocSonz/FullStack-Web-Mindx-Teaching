var fs = require('fs');
var argv = process.argv.slice(2);
if(argv && argv.length >=2){
    var fileInput= argv[0];
    
    var fileOutput = argv[1];
    var content = fs.readFileSync(fileInput).toString();
    console.log("87687");
    // console.log(fs.readFileSync(fileInput));


    // var arrayData = content.split("\r\n");
    // console.log(arrayData);
    /*
        function readFile
        readFileSygn
        btvn: tim hieu fs.write File Stream: ghi content vào file output.txt
        
     */
}