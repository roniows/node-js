const http = require('http');
//create server
const server = http.createServer((req,res)=>{
    //set status code in response
    res.statusCode = 200;
    // set content type of data
    res.setHeader('content-type','text/html');
    // print string
    res.write('hello node jss <br>');
    
    //check current url
    res.write(req.url);
    // response end 
    res.end();
});

// start server
server.listen(3000,()=>console.log("server running"));