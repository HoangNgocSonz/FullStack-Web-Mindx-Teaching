const http = require('http');


const server = http.createServer((req, res)=>{
    if(req.url==='/ss'){
        res.write('Hello World');
        res.end();
    }
    else if(res.url==='/api/courses'){
        var url = "https://rawgit.com/o7planning/webexamples/master/_testdatas_/simple-text-data.txt";
 
 
        function doGetTEXT()  {
         
          // Call fetch(url) with default options.
          // It returns a Promise object (Resolve response object)
          var aPromise = fetch(url);
         
          // Work with Promise object:
          aPromise
            .then(function(response) {
                console.log("OK! Server returns a response object:");
                console.log(response);
         
                if(!response.ok)  {
                    throw new Error("HTTP error, status = " + response.status);
                }
         
                response.text()
                  .then(function(myText) {
                       console.log("Text:");
                       console.log(myText);
                  })
                  .catch(function(error) {
                     // Never happened.
                  });
            })
            .catch(function(error)  {
                console.log("Noooooo! Something error:");
                // Network Error!
                console.log(error);
            });
        }



    }else{
        res.write("er");
        res.end();
    }
});
server.listen(3000);