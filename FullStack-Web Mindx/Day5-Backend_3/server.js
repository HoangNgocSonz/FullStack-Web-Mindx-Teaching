const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url=='/'){
        res.write('hello');
        res.end();
    }
    else if(req.url=='/api/courses'){
        res.write("world");
        res.end();
    }
    else{
        res.write("er");
        res.end();
    }
})
server.listen(3000);